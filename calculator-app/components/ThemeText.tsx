import { Fonts } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Text, TextProps } from "react-native";

interface ThemeTextProps extends TextProps {
  variant?: "h1" | "h2";
}

const ThemeText = ({ children, variant, ...props }: ThemeTextProps) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: Fonts.mono },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
