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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);

  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
    setSelectedVendor(null);
  };

  return (
    <div>
      {/* Navbar at the top */}
      <Navbar
        onCategorySelect={setSelectedCategory}
        onLocationSelect={setSelectedLocation}
        onVendorSelect={setSelectedVendor}
        onClearAll={clearAllFilters}
        selectedCategory={selectedCategory}
        selectedLocation={selectedLocation}
        selectedVendor={selectedVendor}
      />

      {/* Category Cards */}
      <div className="category-cards-section">
        <CategoryCard2/>
        <CategoryCard1/>
      </div>

      {/* Example Product Card */}
        <div style={{ display: "flex", gap: "30px", justifyContent: "center" , marginTop: "40px", marginBottom: "40px"}}>
          <ProductCard 
            image={fruits}
            title="Vegetable Basket"
            price={37}
          />
          <ProductCard 
            image={fruits2}
            title="Fruit Basket"
            price={39}
            oldPrice={60}
            onSale={true}
          />
        </div>

      <ProductCard1
        selectedCategory={selectedCategory}
        selectedLocation={selectedLocation}
        selectedVendor={selectedVendor}
      />   

      
      
    </div>
  );
}

export default App;
