import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "*",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>("");

  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator | undefined>(undefined);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number, formula]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(String(subResult));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula]);

  const buildNumber = (numStr: string) => {
    if (number.includes(".") && numStr === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numStr === ".") {
        setNumber(number + numStr);
        return;
      }

      if (numStr === "0" && !number.includes(".")) {
        return;
      }

      if (numStr === "0" && number.includes(".")) {
        setNumber(number + numStr);
        return;
      }

      if (numStr !== "0" && !number.includes(".")) {
        setNumber(numStr);
        return;
      }
    }

    setNumber(number + numStr);
  };

  const calculateSubResult = () => {
    const [firstValue, operator, secondValue] = formula.split(" ");
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operator) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error(`Operator ${operator} is not supported`);
    }
  };

  const clean = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("");
    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }
    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "-";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.replace("-", "");
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const subResult = calculateSubResult();
    setNumber(String(subResult));
    setPrevNumber("0");
    setFormula("");
    lastOperation.current = undefined;
  };

  return {
    formula,
    number,
    prevNumber,

    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,

    calculateSubResult,
    calculateResult,
  };
};
