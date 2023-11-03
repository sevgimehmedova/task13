import React, { useState } from 'react';
import './styles.css'; 

function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator text-center">
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly />
      <br />
      <button onClick={() => handleClick('1')}>1</button>
      {/* Add buttons for other digits and operators */}
      <br />
      <button onClick={handleCalculate}>=</button>
      <input type="text" value={result} readOnly />
    </div>
  );
}

export default Home;
