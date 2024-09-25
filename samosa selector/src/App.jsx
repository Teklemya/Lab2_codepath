import { useState } from "react";
import "./App.css";
import samosa from "../src/assets/samosa.jpeg";

const App = () => {
  const [count, setCount] = useState(0);

  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed =() => {
    if (count >= 10) {
      setCount(count - 10);
      setMultiplier(multiplier * 2);
    }
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img
          className="samosa"
          onClick={updateCount}
          src={samosa}
          alt="samosa image"
        />
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️	</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button>1000 samosas</button>
        </div>
      </div>
    </div>
  );
};

export default App;
