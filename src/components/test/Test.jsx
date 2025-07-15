import React from "react";
import FoodCard from "../food/FoodCard";


const Test = () => {
  return (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <FoodCard
        name="Плов"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Palov.jpg/800px-Palov.jpg"
        ingredients="Говядина, рис, морковь, лук"
        price={250}
      />
      <FoodCard
        name="Лагман"
        image="https://upload.wikimedia.org/wikipedia/commons/8/83/Lagman_with_meat.jpg"
        ingredients="Говядина, лапша, овощи"
        price={270}
      />
    </div>
  );
};

export default Test;
