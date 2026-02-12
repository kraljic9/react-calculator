import "./App.css";

function App() {
  return (
    <>
      <div className="calculator-container">
        <div className="input-field">Input number</div>
        <div className="key-container">
          <div className="row-one">
            <button>9</button>
            <button>8</button>
            <button>7</button>
          </div>

          <div className="row-two">
            <button>6</button>
            <button>5</button>
            <button>4</button>
          </div>

          <div className="row-three">
            <button>3</button>
            <button>2</button>
            <button>1</button>
          </div>

          <div className="row-four">
            <button>=</button>
            <button>.</button>
            <button>0</button>
          </div>

          <div className="operations">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
