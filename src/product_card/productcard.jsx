import React from "react";
import "./productcard.css";

export default function ProductCard({ image, title, price, oldPrice, onSale }) {
  return (
    <div className="product-card">
      <div className="product-image">
        {onSale && <span className="sale-badge">Sale</span>}
        <img src={image} alt={title} />
      </div>

      <div  className="product1-card">
                <h3 className="product1-name">{title}</h3>
                <div className='location-price'>
                    <span className="product1-location">{title}</span>
                    <span className="product1-price">{price}</span>
                </div>
        </div>
    </div>
  );
}
