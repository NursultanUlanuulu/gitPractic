import React from 'react'
import './pro.css'
import f1 from "./img/f1.png"
function Product() {
  return (
    <div className="product">
        <img src={f1} alt="" />
        <div className="vniz">
            <h2 className="product-title">Man Sweet Hoodie</h2>
        <div className="pro-button">
            <button className="product-button">Add to Cart</button>
            <span className="product-price">$150.00</span>
        </div>
        </div>
    </div>
  )
}

export default Product
