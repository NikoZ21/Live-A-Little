import { Flame } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  activeCount?: number;
  onPressActive?: () => void;
}

export default function Header({
  activeCount = 0,
  onPressActive,
}: HeaderProps) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.brandMark}>
          live <Text style={{ color: "#FF5A36" }}>a little</Text>
        </Text>
        <Pressable style={styles.activePill} onPress={onPressActive}>
          <Flame size={16} color={"#FF5A36"} strokeWidth={2.5} />
          <Text style={styles.activePillText}>
            {activeCount} active
          </Text>
        </Pressable>
      </View>

      <Text style={styles.swipeHint}>
        Swipe right to take the dare · left to pass
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 14,
    paddingHorizontal: 20,
    paddingBottom: 6,
  },
  brandMark: {
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -0.5,
    color: "#241B17",
  },
  activePill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 7,
    elevation: 3,
  },
  activePillText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#241B17",
  },
  swipeHint: {
    fontSize: 14.5,
    fontWeight: "600",
    color: "#93826E",
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
});
