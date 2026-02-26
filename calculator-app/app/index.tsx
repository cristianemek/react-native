import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";
import CalculatorButton from "../components/CalculatorButton";

const CalculatorApp = () => {
  const {
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
    // calculateSubResult,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">{number}</ThemeText>
      </View>

      {formula === prevNumber ? (
        <ThemeText variant="h2"> </ThemeText>
      ) : (
        <ThemeText variant="h2">{prevNumber}</ThemeText>
      )}

      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          onPress={() => {
            clean();
          }}
          blackText
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="+/-"
          onPress={() => {
            toggleSign();
          }}
          blackText
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="del"
          onPress={() => {
            deleteLast();
          }}
          blackText
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="÷"
          onPress={() => {
            divideOperation();
          }}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          onPress={() => {
            buildNumber("7");
          }}
        />
        <CalculatorButton
          label="8"
          onPress={() => {
            buildNumber("8");
          }}
        />
        <CalculatorButton
          label="9"
          onPress={() => {
            buildNumber("9");
          }}
        />
        <CalculatorButton
          label="x"
          onPress={() => {
            multiplyOperation();
          }}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          onPress={() => {
            buildNumber("4");
          }}
        />
        <CalculatorButton
          label="5"
          onPress={() => {
            buildNumber("5");
          }}
        />
        <CalculatorButton
          label="6"
          onPress={() => {
            buildNumber("6");
          }}
        />
        <CalculatorButton
          label="-"
          onPress={() => {
            subtractOperation();
          }}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          onPress={() => {
            buildNumber("1");
          }}
        />
        <CalculatorButton
          label="2"
          onPress={() => {
            buildNumber("2");
          }}
        />
        <CalculatorButton
          label="3"
          onPress={() => {
            buildNumber("3");
          }}
        />
        <CalculatorButton
          label="+"
          onPress={() => {
            addOperation();
          }}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          onPress={() => {
            buildNumber("0");
          }}
          doubleSize
          // style={{ width: 180, textAlign: "left", paddingLeft: 30 }}
        />
        <CalculatorButton
          label="."
          onPress={() => {
            buildNumber(".");
          }}
        />
        <CalculatorButton
          label="="
          onPress={() => {
            calculateResult();
          }}
          color={Colors.orange}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
