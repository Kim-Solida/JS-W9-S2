import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const handleScoreChange = (event) => {
    const newScore = Math.min(10, Math.max(0, event.target.value));
    setScore(newScore);
  };

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${score * 10}%`;

    // 2- Compute color (optional)
    let scoreColor;
    if (score <= 3) {
      scoreColor = "#f44336"; // Red
    } else if (score <= 6) {
      scoreColor = "#f3bc47"; // Yellow
    } else if (score <= 8) {
      scoreColor = "#8bc34a"; // Light Green
    } else {
      scoreColor = "#4CAF50"; // Dark Green
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score}  onChange={handleScoreChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
