import React, { useState } from "react";

function Dice() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const rollDice = () => {
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;
    setDice1(random1);
    setDice2(random2);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 className="font-bold mb-6">Dice Roller</h1>

      <div className="d-flex gap-8 mb-6" style={{ gap: '20px', display: 'flex', justifyContent: 'center' }}>
        <img
          src={`/src/assets/dice${dice1}.png`}
          alt={`Dice ${dice1}`}
          style={{ width: '200px', height: '200px' }}
        />
        <img
          src={`/src/assets/dice${dice2}.png`}
          alt={`Dice ${dice2}`}
          style={{ width: '200px', height: '200px' }}
        />
      </div>

      <button
        onClick={rollDice}
        className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700"
        style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '20px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
      >
        Roll Dice
      </button>
    </div>
  );
}

export default Dice;