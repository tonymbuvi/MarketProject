import './categorycard2.css';
import herb from '../assets/herb.png';
import cereals from '../assets/cereals.png';
import fruits from '../assets/fruits.png';
import pineaple from '../assets/cool_pin.png';
import vegetables from '../assets/veg_bowl.png';
import legumes from '../assets/legumes.png';

function CategoryCard2() {
  
  const cards = [
    { id: 1, title: "Herbs", img: herb },
    { id: 2, title: "Cereals", img: cereals },
    { id: 3, title: "Fruits", img: pineaple },
    { id: 4, title: "Legumes", img: legumes },
    { id: 5, title: "Groceries", img: vegetables },
    { id: 6, title: "Fruits 2", img: fruits },
  ];
  return (
    <div className="cards2-container">
      {cards.map((card) => (
        <div className="card2" key={card.id}>
          <div className="card2-icon">
            <img src={card.img} alt={card.title} />
          </div>
          <p className="card2-title">{card.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard2;
