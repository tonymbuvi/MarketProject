import './categorycard1.css';

import fruits from '../assets/fruits.png';
import fruits2 from '../assets/fruits2.png';
import market from '../assets/market.avif';
import market2 from '../assets/market2.jpg';

function CategoryCard1() {
  

  return (
    <div className="category-card-container">
      {/* Card 1 */}
      <div className="card">
        <img 
          src={market2}
          alt="Fresh Vegetables"/>
        <div className="card-content">
          <h2>FRESH AS YOU LIKE</h2>
          <p>Pure goodness straight from the farm.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <span className="label">Special</span>
        <img 
          src={market} 
          alt="Delicious Food"/>
        <div className="card-content">
          <h2>QUALITY PRODUCE</h2>
          <p>Aromatic and packed with flavor.</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard1;
