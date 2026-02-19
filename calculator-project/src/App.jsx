import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [previousNumber, setPreviousNumber] = useState(null);

  function addToInput(value) {
    setInput((prev) => prev + value);
  }

  function addOperation(value) {}

  function calculate() {}

  function getResult() {}

  console.log(
    "Input:",
    input,
    "First Number:",
    previousNumber,
    "Operator:",
    operator,
  );

  return (
    <>
      <div className="calculator-container">
        <div className="input-field">
          <div className="main-input">
            {!previousNumber ? input : previousNumber + operator + input}
          </div>
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
          <button className="operation-btn" onClick={getResult}>
            =
          </button>
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
            onClick={(e) => addOperation(e.target.value)}
          >
            +
          </button>
          <button
            className="operation-btn"
            value={"-"}
            onClick={(e) => addOperation(e.target.value)}
          >
            -
          </button>
          <button
            className="operation-btn"
            value={"*"}
            onClick={(e) => addOperation(e.target.value)}
          >
            *
          </button>
          <button
            className="operation-btn"
            value={"/"}
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
