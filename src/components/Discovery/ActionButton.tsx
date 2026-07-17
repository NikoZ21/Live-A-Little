import {
  type StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface props {
  children: React.ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  handlePress?: () => void;
}

export default function ActionButton({
  children,
  buttonStyle,
  handlePress,
}: props) {
  return (
    <TouchableOpacity
      style={[styles.roundButton, buttonStyle]}
      onPress={handlePress}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  roundButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
});
