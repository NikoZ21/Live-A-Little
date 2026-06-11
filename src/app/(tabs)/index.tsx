import { Flame, Heart, RefreshCw, X } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DareCard from "../../components/Discovery/DareCard/Card";
import Swipeable from "../../components/Discovery/DareCard/Swipable";

const COLORS = {
  accent: "#FF5A36",
  bg: "#FFF8EE",
  ink: "#241B17",
  sub: "#93826E",
  line: "#ECE0CF",
  creative: "#7C5CFF",
  passIcon: "#9aa0a6",
};

export default function Index() {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.brandMark}>
          live <Text style={{ color: COLORS.accent }}>a little</Text>
        </Text>
        <Pressable style={styles.activePill}>
          <Flame size={16} color={COLORS.accent} strokeWidth={2.5} />
          <Text style={styles.activePillText}>7 active</Text>
        </Pressable>
      </View>

      {/* Swipe hint */}
      <Text style={styles.swipeHint}>
        Swipe right to take the dare · left to pass
      </Text>

      <Swipeable onAccept={() => {}} onPass={() => {}}>
        <DareCard />
      </Swipeable>

      {/* Action bar */}
      <View style={styles.actionBar}>
        <Pressable style={[styles.roundButton, styles.passButton]}>
          <X size={24} color={COLORS.passIcon} strokeWidth={2.5} />
        </Pressable>
        <Pressable style={[styles.roundButton, styles.reshuffleButton]}>
          <RefreshCw size={19} color={COLORS.sub} strokeWidth={2.5} />
        </Pressable>
        <Pressable style={[styles.roundButton, styles.acceptButton]}>
          <Heart size={24} color="#fff" strokeWidth={2.5} fill="#fff" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
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
    color: COLORS.ink,
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
    color: COLORS.ink,
  },
  swipeHint: {
    fontSize: 14.5,
    fontWeight: "600",
    color: COLORS.sub,
    paddingHorizontal: 20,
    paddingBottom: 8,
  },

  actionBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 22,
    paddingTop: 18,
    paddingBottom: 14,
  },
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
  passButton: {
    width: 56,
    height: 56,
    backgroundColor: "#fff",
    borderColor: COLORS.line,
  },
  reshuffleButton: {
    width: 46,
    height: 46,
    backgroundColor: "#fff",
    borderColor: COLORS.line,
  },
  acceptButton: {
    width: 56,
    height: 56,
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
  },
});
