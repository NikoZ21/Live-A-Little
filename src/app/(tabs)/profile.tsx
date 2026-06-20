import { LinearGradient } from "expo-linear-gradient";
import { Flame } from "lucide-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  bg: "#FFF8EE",
  ink: "#241B17",
  sub: "#93826E",
  line: "#ECE0CF",
  accent: "#FF5A36",
  accent2: "#FF9F1C",
  highlight: "#DBF6F2",
  highlightText: "#13B6A6",
};

const CATEGORIES = [
  { label: "Social", color: "#FF5A5F", tint: "#FFE9E9", count: 1, max: 2 },
  { label: "Adventure", color: "#13B6A6", tint: "#DBF6F2", count: 2, max: 2 },
  { label: "Creative", color: "#7C5CFF", tint: "#EBE6FF", count: 2, max: 2 },
  { label: "Kindness", color: "#FF6FB5", tint: "#FFE6F3", count: 0, max: 2 },
  { label: "Taste", color: "#FF9F1C", tint: "#FFF0D6", count: 1, max: 2 },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function CategoryRow({
  label,
  color,
  tint,
  count,
  max,
}: (typeof CATEGORIES)[number]) {
  const pct = max > 0 ? count / max : 0;

  return (
    <View style={styles.categoryRow}>
      <Text style={styles.categoryLabel}>{label}</Text>
      <View style={[styles.progressTrack, { backgroundColor: tint }]}>
        <View
          style={[
            styles.progressFill,
            { backgroundColor: color, width: `${pct * 100}%` },
          ]}
        />
      </View>
      <Text style={styles.categoryCount}>{count}</Text>
    </View>
  );
}

export default function Profile() {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>You</Text>
          <Text style={styles.subtitle}>your appetite for life</Text>
        </View>

        <LinearGradient
          colors={[COLORS.accent, COLORS.accent2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.streakCard}
        >
          <View style={styles.streakDecoration} pointerEvents="none">
            <Flame size={120} color="#fff" strokeWidth={1.5} opacity={0.2} />
          </View>

          <Text style={styles.streakLabel}>CURRENT STREAK</Text>
          <Text style={styles.streakNumber}>
            4 <Text style={styles.streakDays}>days</Text>
          </Text>
          <Text style={styles.streakQuote}>
            keep the spark going — you&apos;re doing beautifully.
          </Text>
        </LinearGradient>

        <View style={styles.statsRow}>
          <StatCard value="6" label="dares lived" />
          <StatCard value="0" label="this week" />
          <StatCard value="26" label="passed on" />
        </View>

        <View style={styles.reachCard}>
          <Text style={styles.sectionTitle}>What you reach for</Text>
          {CATEGORIES.map((cat) => (
            <CategoryRow key={cat.label} {...cat} />
          ))}
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.highlightText}>
            You&apos;re at your happiest being adventure.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  header: {
    paddingTop: 14,
    paddingBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: -0.6,
    color: COLORS.ink,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 17,
    fontStyle: "italic",
    color: COLORS.sub,
  },
  streakCard: {
    borderRadius: 24,
    padding: 24,
    overflow: "hidden",
    minHeight: 160,
  },
  streakDecoration: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  streakLabel: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    opacity: 0.85,
  },
  streakNumber: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "800",
    lineHeight: 68,
    marginTop: 8,
  },
  streakDays: {
    fontSize: 30,
    fontWeight: "800",
  },
  streakQuote: {
    color: "#fff",
    fontSize: 17,
    fontStyle: "italic",
    marginTop: 8,
    opacity: 0.95,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.line,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  statValue: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.ink,
  },
  statLabel: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.sub,
    textAlign: "center",
  },
  reachCard: {
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.line,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: COLORS.ink,
    marginBottom: 16,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    gap: 12,
  },
  categoryLabel: {
    width: 72,
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.ink,
  },
  progressTrack: {
    flex: 1,
    height: 10,
    borderRadius: 100,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 100,
  },
  categoryCount: {
    width: 16,
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.sub,
    textAlign: "right",
  },
  highlightBox: {
    marginTop: 16,
    backgroundColor: COLORS.highlight,
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  highlightText: {
    fontSize: 17,
    fontStyle: "italic",
    color: COLORS.highlightText,
    textAlign: "center",
    lineHeight: 24,
  },
});
