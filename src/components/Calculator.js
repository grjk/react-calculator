import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
import "../css/styles.css";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [operator, setOp] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");
  const [currentNumbers, setCN] = useState("0");

  useEffect(() => {
    setResult(currentNumbers);
  }, [currentNumbers]);

  const setValues = (value) => {
    if (currentNumbers == 0) {
      setCN(value);
    } else if (!isNaN(value)) {
      setCN(currentNumbers + value);
    }

    if (value == "C") {
      clearValues();
      return;
    } else if (value == "=") {
      runEquation();
      return;
    } else if (isNaN(value)) {
      setCN("");
      setOp(value);
      return;
    }

    // Update the first number to contain the last result so it's not lost when updating the second number

    // If the operator is set then the first number was already set
    if (!operator) {
      setFirstNumber(firstNumber + value);
    } else if (!result) {
      setSecondNumber(value);
    } else if (firstNumber && result) {
      setSecondNumber(secondNumber + value);
    }
  };

  const clearValues = () => {
    setFirstNumber("");
    setOp("");
    setSecondNumber("");
    setResult("");
  };

  const runEquation = () => {
    var equation = "";
    if (operator == "+") {
      equation = parseInt(firstNumber) + parseInt(secondNumber);
    } else if (operator == "-") {
      equation = parseInt(firstNumber) - parseInt(secondNumber);
    } else if (operator == "*") {
      equation = parseInt(firstNumber) * parseInt(secondNumber);
    } else if (operator == "/") {
      equation = parseInt(firstNumber) / parseInt(secondNumber);
    } else if (operator == "%") {
      equation = parseInt(firstNumber) % parseInt(secondNumber);
    }
    clearValues();
    setResult(equation);
    setFirstNumber(equation);
  };

  return (
    <div>
      <div className="calculator">
        <div>
          <div className="button-group">
            <div className="result-display">{result}</div>
          </div>
          <div className="button-group numbers">
            <Button value="9" setValues={setValues}></Button>
            <Button value="8" setValues={setValues}></Button>
            <Button value="7" setValues={setValues}></Button>
            <Button value="6" setValues={setValues}></Button>
            <Button value="5" setValues={setValues}></Button>
            <Button value="4" setValues={setValues}></Button>
            <Button value="3" setValues={setValues}></Button>
            <Button value="2" setValues={setValues}></Button>
            <Button value="1" setValues={setValues}></Button>
            <Button value="0" setValues={setValues}></Button>
          </div>

          <div className="button-group">
            <Button value="+" setValues={setValues}></Button>
            <Button value="-" setValues={setValues}></Button>
            <Button value="*" setValues={setValues}></Button>
            <Button value="/" setValues={setValues}></Button>
            <Button value="%" setValues={setValues}></Button>
            <Button value="C" setValues={setValues}></Button>
          </div>

          <div className="button-group">
            <Button value="=" setValues={setValues}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
