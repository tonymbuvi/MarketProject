import './App.css';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'; 
import Navbar from './Navbar';
import CategoryCard1 from './category_card/categorycard1';
import CategoryCard2 from './category_card/categorycard2';
import ProductCard from './product_card/productcard';
import ProductCard1 from './product_card/productcard1';
import fruits from './assets/fruits.png';
import fruits2 from './assets/fruits2.png';

function App() {
  // State for the buttons in the Navigation bar
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Potatoes"); // default
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
      {/* Navbar at the top */}
      <Navbar
        onCategorySelect={setSelectedCategory}
        onLocationSelect={setSelectedLocation}
        onVendorSelect={setSelectedVendor}
        onClearAll={clearAllFilters}
      />      
      <div style={{margin: "40px"}}>
         {/* Category Cards */}
        <div className="category-cards-section">
          <CategoryCard1/>
          <CategoryCard2/>
        </div>
        {/* Example Product Card */}
        <div style={{ display: "flex", gap: "30px", margin: "40px" }}>
          <ProductCard 
            image={fruits}
            title="SHIELD SPRAY"
            price={37}
          />
          <ProductCard 
            image={fruits2}
            title="SHIELD SHAMPOO"
            price={39}
            oldPrice={60}
            onSale={true}
          />
        </div>
        <div>
          <ProductCard1/>
        </div>
      </div>
    </div>
  );
}

export default App;
