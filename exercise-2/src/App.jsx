import React, { useState } from "react";
import StuffForm from "./components/StuffForm";
import StuffCard from "./components/StuffCard";

const INITIAL_STUFFS = [
  { name: "Banana", price: 54.5 },
  { name: "Computer", price: 100.5 },
  { name: "Table", price: 60 },
];

export default function App() {
  const [stuffs, setStuffs] = useState(INITIAL_STUFFS);

  const handleAddStuff = (newStuff) => {
    setStuffs([...stuffs, newStuff]); // Add new stuff to the list
  };

  return (
    <>
      <header>
        <h1>My Stuff</h1>
      </header>

      <StuffForm onAdd={handleAddStuff} />

      <div className="stuff-list">
        {stuffs.map((stuff, index) => (
          <StuffCard key={index} name={stuff.name} price={stuff.price} />
        ))}
      </div>
    </>
  );
}
