import React from "react";

export default function OrderCard({ product, price, quantity, onUpdateQuantity }) {
  const handleDecrease = () => {
    if (quantity > 0) {
      onUpdateQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity(quantity + 1);
  };

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{`$ ${price}`}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={handleDecrease}>
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={handleIncrease}>
          +
        </div>
      </div>
    </div>
  );
}
