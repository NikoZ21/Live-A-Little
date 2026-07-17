import { useState } from "react";

import { Heart, RefreshCcw, X } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ActiveSheet from "@/components/Discovery/ActiveSheet";
import Card from "@/components/Discovery/DareCard/Card";
import Swipeable from "@/components/Discovery/DareCard/Swipable";
import Header from "@/components/Discovery/Header";

import { DARES, Dare } from "@/data/dares";

import ActionButton from "@/components/Discovery/ActionButton";

const COLORS = {
  accent: "#FF5A36",
  bg: "#FFF8EE",
  ink: "#241B17",
  sub: "#93826E",
  line: "#ECE0CF",
  creative: "#7C5CFF",
  passIcon: "#9aa0a6",
};

/** Dummy actives for the sheet UI — wire to real accept state later */
const INITIAL_ACTIVES: Dare[] = [DARES[7], DARES[2]];

export default function Index() {
  const [deckIndex, setDeckIndex] = useState(0);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [actives] = useState<Dare[]>(INITIAL_ACTIVES);

  const topDare = DARES[deckIndex];
  const nextDare = DARES[deckIndex + 1];
  const advance = () => setDeckIndex((i) => i + 1);

  const handleRefresh = () => {
    console.log("refershing index");
    setDeckIndex(0);
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <Header
        activeCount={actives.length}
        onPressActive={() => setSheetOpen(true)}
      />

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
        <ActionButton buttonStyle={styles.passButton} handlePress={advance}>
          <X size={24} color={COLORS.passIcon} strokeWidth={2.5} />
        </ActionButton>

        <ActionButton
          buttonStyle={styles.reshuffleButton}
          handlePress={handleRefresh}
        >
          <RefreshCcw size={19} color={COLORS.sub} strokeWidth={2.5} />
        </ActionButton>

        <ActionButton buttonStyle={styles.acceptButton} handlePress={advance}>
          <Heart size={24} color="#fff" strokeWidth={2.5} fill="#fff" />
        </ActionButton>
      </View>

      <ActiveSheet
        visible={sheetOpen}
        actives={actives}
        onClose={() => setSheetOpen(false)}
        onSelect={(dare) => {
          // TODO: navigate to dare detail
          console.log("selected active dare", dare.id);
        }}
      />
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
