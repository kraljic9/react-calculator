import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  console.log("input:", input);
  console.log("Number A:", numberA);
  console.log("Number B:", numberB);

  function addToInput(value) {
    setInput((prev) => Number(prev + value));
  }

  function addOperation(value) {
    setOperator(value);

    if (operator) {
      setNumberA((prev) => prev + input);
      setInput("");
    }
  }

  return (
    <>
      <div className="calculator-container">
        <div className="input-field">
          <div className="main-input">0</div>
          <div className="result">= 0</div>
        </div>

        <div className="row-one">
          <button
            className="num-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={9}
          >
            9
          </button>
          <button
            className="num-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={8}
          >
            8
          </button>
          <button
            className="num-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={7}
          >
            7
          </button>
        </div>

        <div className="row-two">
          <button
            className="num-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={6}
          >
            6
          </button>
          <button
            className="num-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={5}
          >
            5
          </button>
          <button
            className="num-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={4}
          >
            4
          </button>
        </div>

        <div className="row-three">
          <button
            className="num-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={3}
          >
            3
          </button>
          <button
            className="num-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={2}
          >
            2
          </button>
          <button
            className="num-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={1}
          >
            1
          </button>
        </div>

        <div className="row-four">
          <button className="operation-btn">=</button>
          <button
            className="operation-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={"."}
          >
            .
          </button>
          <button
            className="num-btn"
            onClick={(e) => addToInput(e.target.value)}
            value={0}
          >
            0
          </button>
        </div>

        <div className="operations">
          <button
            className="operation-btn"
            value={"+"}
            onClick={(e) => {
              addOperation(e.target.value);
            }}
          >
            +
          </button>
          <button
            className="operation-btn"
            value={"+"}
            onClick={(e) => addOperation(e.target.value)}
          >
            -
          </button>
          <button
            className="operation-btn"
            value={"+"}
            onClick={(e) => addOperation(e.target.value)}
          >
            *
          </button>
          <button
            className="operation-btn"
            value={"+"}
            onClick={(e) => addOperation(e.target.value)}
          >
            /
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
