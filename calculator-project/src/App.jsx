import "./App.css";

function App() {
  return (
    <>
      <div className="calculator-container">
        <div className="input-field">Input number</div>

        <div className="row-one">
          <button className="num-btn">9</button>
          <button className="num-btn">8</button>
          <button className="num-btn">7</button>
        </div>

        <div className="row-two">
          <button className="num-btn">6</button>
          <button className="num-btn">5</button>
          <button className="num-btn">4</button>
        </div>

        <div className="row-three">
          <button className="num-btn">3</button>
          <button className="num-btn">2</button>
          <button className="num-btn">1</button>
        </div>

        <div className="row-four">
          <button className="operation-btn">=</button>
          <button className="operation-btn">.</button>
          <button className="num-btn">0</button>
        </div>

        <div className="operations">
          <button className="operation-btn">+</button>
          <button className="operation-btn">-</button>
          <button className="operation-btn">*</button>
          <button className="operation-btn">/</button>
        </div>
      </div>
    </>
  );
}

export default App;
