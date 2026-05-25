import React, { useState } from 'react';
import './App.css'; // This links the separate CSS file

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-wrapper">
      <div className="outer-border-box">
        <div className="inner-counter-card">
          
          <h2 className="counter-title">React Counter Application</h2>
          
          <div className="counter-display">{count}</div>
          
          <div className="button-row">
            <button className="counter-btn" onClick={() => setCount(count + 1)}>
              Increment (+)
            </button>
            <button className="counter-btn" onClick={() => setCount(count - 1)}>
              Decrement (-)
            </button>
          </div>
          
          <div className="reset-row">
            <button className="counter-btn reset-btn" onClick={() => setCount(0)}>
              Reset
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;