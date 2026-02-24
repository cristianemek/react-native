import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface Props {
  label: string;

  postition?: "left" | "right";

  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  postition = "right",
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.floatingButton,
        postition === "right" ? styles.positionRight : styles.positionLeft,
        pressed && { opacity: 0.75 },
      ]}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#ff00bb",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
