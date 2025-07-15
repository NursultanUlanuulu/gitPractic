
import React from "react"
import "./FoodCard.css"

const FoodCard = ({ name, image, ingredients, price }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} className="food-img" />
      <div className="food-body">
        <h3 className="food-name">{name}</h3>
        <p className="food-ingredients">{ingredients}</p>
        <div className="food-footer">
          <span className="food-price">{price} сом</span>
          <button className="food-btn">Заказать</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
