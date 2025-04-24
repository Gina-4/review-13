import React, { useState, useEffect } from 'react';
import FruitList from './components/FruitList';
import PositiveMessage from './components/positiveMessage';


function App() {
  const [totalFruits, setTotalFruits] = useState(0);
  // This is the goal for the number of fruits to be eaten per day
  const goal = 5;

  const handleTotalChange = (newTotalFruits) => {
    setTotalFruits(newTotalFruits);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>🍎 Healthy Eating Tracker</h1>
      <FruitList 
        fruits={["Feijoa", "Apple",  "Avocado", "Orange", "Banana"]} 
        onTotalChange={handleTotalChange} 
        
      />
      < PositiveMessage totalFruits={totalFruits} goal={goal} />
    </div>

   
  );
}

export default App; 
