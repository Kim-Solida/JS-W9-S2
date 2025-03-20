import React from "react";

export default function StuffCard({ name, price }) {
  const formatPrice = (price) => "$ " + price; // Price formatting with dollar sign, no fixed decimals

  return (
    <div className="stuff">
      <h4>{name}</h4>  {/* Display name */}
      <small>{formatPrice(price)}</small>  {/* Display price */}
    </div>
  );
}
