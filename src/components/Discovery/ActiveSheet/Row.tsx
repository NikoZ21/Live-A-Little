import { CATEGORY_META } from "@/data/categories";
import { Dare } from "@/data/dares";
import { ArrowRight } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

const COLORS = {
  bg: "#FFF8EE",
  ink: "#241B17",
  sub: "#93826E",
  line: "#ECE0CF",
  accent: "#FF5A36",
  scrim: "rgba(20,14,10,0.4)",
};

export function Row({
  dare,
  onPress,
}: {
  dare: Dare;
  onPress?: (dare: Dare) => void;
}) {
  const meta = CATEGORY_META[dare.category];
  const Icon = meta.Icon;

  return (
    <Pressable
      style={styles.row}
      onPress={() => onPress?.(dare)}
      accessibilityRole="button"
    >
      <View style={[styles.iconTile, { backgroundColor: meta.tint }]}>
        <Icon size={24} color={meta.color} strokeWidth={2.2} />
      </View>

      <View style={styles.rowText}>
        <Text style={styles.rowTitle} numberOfLines={1}>
          {dare.title}
        </Text>
        <Text style={styles.rowMeta}>
          {meta.label} · {dare.minutes} min
        </Text>
      </View>

      <ArrowRight size={20} color={COLORS.accent} strokeWidth={2.5} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
