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

  const lastOperation = useRef<Operator| null>(null);

  const buildNumber = (numStr: string) => {
    if (number.includes(".") && numStr === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numStr === ".") {
        setNumber(number + numStr);
        return;
      }

      if (numStr === "0" && !number.includes(".")) {
        setNumber(number);
        return;
      }

      if (numStr !== "0" && !number.includes(".")) {
        setNumber(numStr);
        return;
      }
    }

    setNumber(number + numStr);
  };

  useEffect(() => {
    setFormula(number);
  }, [number]);

  return {
    formula,
    number,
    prevNumber,

    buildNumber,
  };
};
