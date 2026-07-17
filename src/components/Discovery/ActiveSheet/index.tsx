import { Dare } from "@/data/dares";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Row } from "./Row";

const COLORS = {
  bg: "#FFF8EE",
  ink: "#241B17",
  sub: "#93826E",
  line: "#ECE0CF",
  accent: "#FF5A36",
  scrim: "rgba(20,14,10,0.4)",
};

export interface ActiveSheetProps {
  visible: boolean;
  actives: Dare[];
  onClose: () => void;
  onSelect?: (dare: Dare) => void;
}

export default function ActiveSheet({
  visible,
  actives,
  onClose,
  onSelect,
}: ActiveSheetProps) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.root}>
        <Pressable style={styles.scrim} onPress={onClose} />

        <View
          style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 26) }]}
        >
          <View style={styles.grabber} />

          <Text style={styles.title}>Dares in progress</Text>

          {actives.length === 0 ? (
            <Text style={styles.empty}>
              Nothing on the go. Swipe right on a dare to start one.
            </Text>
          ) : (
            <ScrollView
              style={styles.list}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}
            >
              {actives.map((dare) => (
                <Row
                  key={dare.id}
                  dare={dare}
                  onPress={(selected) => {
                    onSelect?.(selected);
                    onClose();
                  }}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-end",
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.scrim,
  },
  sheet: {
    backgroundColor: COLORS.bg,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingTop: 14,
    paddingHorizontal: 20,
    maxHeight: "76%",
  },
  grabber: {
    alignSelf: "center",
    width: 42,
    height: 5,
    borderRadius: 3,
    backgroundColor: COLORS.line,
    marginBottom: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: "800",
    color: COLORS.ink,
    marginBottom: 16,
  },
  empty: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.sub,
    textAlign: "center",
    paddingVertical: 28,
    paddingHorizontal: 12,
  },
  list: {
    flexGrow: 0,
  },
  listContent: {
    gap: 12,
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 14,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 18,
  },
  iconTile: {
    width: 46,
    height: 46,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  rowText: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: COLORS.ink,
    marginBottom: 2,
  },
  rowMeta: {
    fontSize: 13.5,
    fontWeight: "600",
    color: COLORS.sub,
  },
});
