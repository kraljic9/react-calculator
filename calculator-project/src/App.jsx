import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");
  const [firstNumber, setFirstNumber] = useState(0);
  const [result, setResult] = useState(0);

  function addToInput(value) {
    setInput((prev) => prev + value);
  }

  function addOperation(value) {
    if (!input) return;

    if (!operator) {
      setFirstNumber(input);
      setOperator(value);
      setInput("");
    } else {
      calculate();
      setOperator(value);
      setInput("");
    }
  }

  function calculate() {
    if (operator === "+") {
      const calculated = Number(firstNumber) + Number(input);
      setResult(calculated);
      setFirstNumber(calculated);
    } else if (operator === "-") {
      const calculated = Number(firstNumber) - Number(input);
      setResult(calculated);
      setFirstNumber(calculated);
    } else if (operator === "*") {
      const calculated = Number(firstNumber) * Number(input);

      setResult(calculated);
      setFirstNumber(calculated);
    } else if (operator === "/") {
      if (input === "0") {
        setResult("Divison by zero is not allowed!");
        return;
      }
      const calculated = Number(firstNumber) / Number(input);
      setResult(calculated);
      setFirstNumber(calculated);
    }
  }

  function getResult() {
    if (operator === "+") {
      const calculated = Number(firstNumber) + Number(input);
      setResult(calculated);
    } else if (operator === "-") {
      const calculated = Number(firstNumber) - Number(input);
      setResult(calculated);
    } else if (operator === "*") {
      const calculated = Number(firstNumber) * Number(input);

      setResult(calculated);
    } else if (operator === "/") {
      if (input === "0") {
        setResult("Divison by zero is not allowed!");
        return;
      }
      const calculated = Number(firstNumber) / Number(input);
      setResult(calculated);
    }

    setInput(result);
    setOperator("");
    setFirstNumber(0);
  }

  console.log(
    "Input:",
    input,
    "First Number:",
    firstNumber,
    "Operator:",
    operator,
    "Result:",
    result,
  );

  return (
    <>
      <div className="calculator-container">
        <div className="input-field">
          <div className="main-input">
            {!firstNumber ? input : firstNumber + operator + input}
          </div>
          <div className="result">= {result}</div>
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
