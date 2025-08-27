import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'; 
import "./productcard1.css";

function ProductCard1() {
  // State for the buttons in the Navigation bar
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // default
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);

  // Fetch products when component loads
  useEffect(() => {
    fetch("http://localhost:4000/products")  // Flask endpoint
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Filters product categories based on the State
  const filteredProducts = products.filter((product) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedLocation || product.location === selectedLocation) &&
      (!selectedVendor || product.vendor === selectedVendor)
    );
  });

  // Clears all filters
  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
    setSelectedVendor(null);
  };

  // Update rating in backend + frontend
  const updateRating = (id, newRating) => {
    fetch("http://localhost:4000/update-rating", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, newRating }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Update UI locally so it reflects immediately
          setProducts((prev) =>
            prev.map((p) =>
              p.id === id ? { ...p, rating: newRating } : p
            )
          );
        }
      })
      .catch((err) => console.error("Error updating rating:", err));
  };

  // Star Ratings tag
  const renderStars = (rating, id) => {
    const numericRating = Number(rating) || 0;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < numericRating ? "#ffc107" : "#e4e5e9"}
          size={16}
          onClick={() => updateRating(id, i + 1)} // update on click
          style={{ cursor: "pointer" }}
        />
      );
    }
    return stars;
  };

  return (
    <div>

      {/* Product Grid */}
        <div className="product1-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product1-card">
                <h3 className="product1-name">{product.category}</h3>
                <div className='location-price'>
                    <span className="product1-location">{product.location}</span>
                    <span className="product1-price">{product.price}</span>
                </div>
                
                {/* Stars Grid */}
                <div className="product1-rating">
                  {renderStars(product.rating, product.id)}
                </div>
            </div>
          ))}
        </div>
     
    </div>
  );
}

export default ProductCard1;
