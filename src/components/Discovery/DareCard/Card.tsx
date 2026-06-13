import { Dare } from "@/data/dares";
import { Clock, Pencil } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Card({ dare }: { dare: Dare }) {
  const { category, minutes, difficulty, blurb, title } = dare;

  return (
    <View style={styles.card}>
      <View style={styles.decoration} pointerEvents="none">
        <Pencil size={210} color="#fff" strokeWidth={1.6} opacity={0.16} />
      </View>

      {/* Category chip */}
      <View style={styles.chip}>
        <Pencil size={14} color="#fff" strokeWidth={2.5} />
        <Text style={styles.chipText}>MAKE · CREATIVE</Text>
      </View>

      <View style={{ flex: 1 }} />

      <Text style={styles.dareNumber}>DARE №{dare.id}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardBlurb}>{blurb}</Text>

      {/* Meta row */}
      <View style={styles.metaRow}>
        <View style={styles.metaItem}>
          <Clock size={15} color="#fff" strokeWidth={2.5} />
          <Text style={styles.metaText}>{minutes} min</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaText}>nerve</Text>
          <View style={styles.dots}>
            <View style={[styles.dot, styles.dotFilled]} />
            <View style={[styles.dot, styles.dotEmpty]} />
            <View style={[styles.dot, styles.dotEmpty]} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 4,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#7C5CFF",
    paddingVertical: 34,
    paddingHorizontal: 30,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 24 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 14,
  },
  decoration: {
    position: "absolute",
    top: 10,
    right: -10,
    transform: [{ rotate: "0deg" }],
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 7,
    backgroundColor: "rgba(255,255,255,0.22)",
    borderRadius: 100,
    paddingVertical: 9,
    paddingHorizontal: 16,
  },
  chipText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  dareNumber: {
    color: "#fff",
    opacity: 0.6,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 44,
    fontWeight: "800",
    letterSpacing: -0.8,
    lineHeight: 46,
    marginBottom: 14,
  },
  cardBlurb: {
    color: "#fff",
    fontSize: 16.5,
    fontWeight: "600",
    lineHeight: 24,
    marginBottom: 26,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metaText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  dots: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  dotFilled: {
    backgroundColor: "#fff",
  },
  dotEmpty: {
    borderWidth: 1.6,
    borderColor: "#fff",
    opacity: 0.4,
  },
});
