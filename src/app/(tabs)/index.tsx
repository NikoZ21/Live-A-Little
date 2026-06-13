import { useState } from "react";

import { Heart, RefreshCw, X } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../../components/Discovery/DareCard/Card";
import Swipeable from "../../components/Discovery/DareCard/Swipable";
import Header from "../../components/Discovery/Header";

import { DARES } from "../../data/dares";

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
  const [deckIndex, setDeckIndex] = useState(0);
  const topDare = DARES[deckIndex];
  const nextDare = DARES[deckIndex + 1];
  const advance = () => setDeckIndex((i) => i + 1);

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <Header />

      <View style={{ flex: 1 }}>
        {/* BEHIND: next card, static, no gestures */}
        {nextDare && (
          <View style={StyleSheet.absoluteFill}>
            <Card dare={nextDare} />
          </View>
        )}
        {/* ON TOP: current card, swipeable */}
        {topDare && (
          <Swipeable key={topDare.id} onAccept={advance} onPass={advance}>
            <Card dare={topDare} />
          </Swipeable>
        )}
      </View>
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
