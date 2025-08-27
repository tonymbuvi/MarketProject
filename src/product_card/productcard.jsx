import React from "react";
import "./productcard.css";

export default function ProductCard({ image, title, price, oldPrice, onSale }) {
  return (
    <div className="product-card">
      <div className="product-image">
        {onSale && <span className="sale-badge">Sale</span>}
        <img src={image} alt={title} />
      </div>

      <div className="product-info">
        <p className="product-price">
          {oldPrice && <span className="old-price">${oldPrice}</span>}{" "}
          <span className="new-price">${price}</span>
        </p>
        <h3 className="product-title">{title}</h3>
      </div>
    </div>
  );
}
