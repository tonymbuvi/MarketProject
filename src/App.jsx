import './App.css';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa'; 
import Navbar from './Navbar';


const productData = [
  {
    "id": 1,
    "date": "2025-08-23",
    "category": "Potatoes",
    "unit_measurement": "KG",
    "price": "100/KG",
    "freshness": "Today",
    "vendor": "Vendor A",
    "location": "Githurai",
    "rating": 4,
    "image_url": "src/assets/Potatoes.jfif"
  },
  {
    "id": 2,
    "date": "2025-08-23",
    "category": "Potatoes",
    "unit_measurement": "KG",
    "price": "120/KG",
    "freshness": "Today",
    "vendor": "Vendor B",
    "location": "Marikiti",
    "rating": 5,
    "image_url": "src/assets/Potatoes.jfif"
  },
  {
    "id": 3,
    "date": "2025-08-23",
    "category": "Potatoes",
    "unit_measurement": "KG",
    "price": "130/KG",
    "freshness": "Today",
    "vendor": "Vendor C",
    "location": "Ruaka",
    "rating": 3,
    "image_url": "src/assets/Potatoes.jfif"
  },
  {
    "id": 4,
    "date": "2025-08-23",
    "category": "Tomatoes",
    "unit_measurement": "KG",
    "price": "80/KG",
    "freshness": "Today",
    "vendor": "Vendor A",
    "location": "Githurai",
    "rating": 4,
    "image_url": "src/assets/Tomatoes.jfif"
  },
  {
    "id": 5,
    "date": "2025-08-23",
    "category": "Tomatoes",
    "unit_measurement": "KG",
    "price": "60/KG",
    "freshness": "Today",
    "vendor": "Vendor B",
    "location": "Marikiti",
    "rating": 5,
    "image_url": "src/assets/Tomatoes.jfif"
  },
  {
    "id": 6,
    "date": "2025-08-23",
    "category": "Tomatoes",
    "unit_measurement": "KG",
    "price": "70/KG",
    "freshness": "Today",
    "vendor": "Vendor C",
    "location": "Ruaka",
    "rating": 3,
    "image_url": "src/assets/Tomatoes.jfif"
  },
  {
    "id": 7,
    "date": "2025-08-23",
    "category": "Beans",
    "unit_measurement": "KG",
    "price": "40/KG",
    "freshness": "Today",
    "vendor": "Vendor A",
    "location": "Githurai",
    "rating": 4,
    "image_url": "src/assets/Beans.jfif"
  },
  {
    "id": 8,
    "date": "2025-08-23",
    "category": "Beans",
    "unit_measurement": "KG",
    "price": "30/KG",
    "freshness": "Today",
    "vendor": "Vendor B",
    "location": "Marikiti",
    "rating": 5,
    "image_url": "src/assets/Beans.jfif"
  },
  {
    "id": 9,
    "date": "2025-08-23",
    "category": "Beans",
    "unit_measurement": "KG",
    "price": "35/KG",
    "freshness": "Today",
    "vendor": "Vendor C",
    "location": "Ruaka",
    "rating": 3,
    "image_url": "src/assets/Beans.jfif"
  }
];

function App() {
  const [products] = useState(productData);
  const [selectedCategory, setSelectedCategory] = useState("Potatoes"); // default
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);


  const filteredProducts = products.filter((product) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedLocation || product.location === selectedLocation) &&
      (!selectedVendor || product.vendor === selectedVendor)
    );
  });

  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
    setSelectedVendor(null);
  };
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < rating ? '#ffc107' : '#e4e5e9'}
          size={16}
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

      {/* Product Grid */}
      <div className="main-container">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-details">
                <h3 className="product-name">{product.category}</h3>
                <div className="detail-item">
                  <span className="detail-label">Price:</span>
                  <span className="detail-value">{product.price}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{product.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Vendor:</span>
                  <span className="detail-value">{product.vendor}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{product.date}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Unit:</span>
                  <span className="detail-value">{product.unit_measurement}</span>
                </div>
                <div className="product-rating">{renderStars(product.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
