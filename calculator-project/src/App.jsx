import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [previousNumber, setPreviousNumber] = useState(null);

  function addToInput(value) {
    setInput((prev) => prev + value);
  }

  function addOperation(value) {
    if (!input) return;

    if (previousNumber === null) {
      setPreviousNumber(Number(input));
    } else {
      const calculated = preformeCalculation(
        previousNumber,
        Number(input),
        operator,
      );

      setPreviousNumber(calculated);
    }

    setOperator(value);
    setInput("");
  }

  function getResult() {
    if (!operator || input === "") return;

    const calculated = preformeCalculation(
      previousNumber,
      Number(input),
      operator,
    );

    setInput(String(calculated));
    setPreviousNumber(null);
    setOperator(null);
  }

  function clear() {
    setInput("");
    setOperator(null);
    setPreviousNumber(null);
  }

  function preformeCalculation(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) return "Error";
        return a / b;
      default:
        return b;
    }
  }

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
        <button onClick={clear} className="clear">
          Clear
        </button>
      </div>
    </>
  );
}
export default App;
