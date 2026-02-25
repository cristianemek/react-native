import { Colors, Fonts } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },

  mainResult: {
    fontSize: 70,
    color: Colors.textPrimary,
    textAlign: "right",
    fontWeight: "400",
    // fontFamily: Fonts.mono,
  },

  subResult: {
    color: Colors.textSecondary,
    textAlign: "right",
    fontSize: 40,
    fontWeight: "300",
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },

  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: Colors.darkGray,
    justifyContent: "center",
    marginHorizontal: 10,
  },

  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: Colors.textPrimary,
    fontFamily: Fonts.mono,
    fontWeight: "300",
  },
});
