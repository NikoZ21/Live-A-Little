import {
  Clock,
  Heart,
  MessageCircle,
  Mountain,
  Palette,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export type DareCategory =
  | "social"
  | "adventure"
  | "creative"
  | "kindness"
  | "food";

const CATEGORIES: Record<
  DareCategory,
  { label: string; verb: string; color: string; Icon: LucideIcon }
> = {
  social: {
    label: "Social",
    verb: "Connect",
    color: "#FF5A5F",
    Icon: MessageCircle,
  },
  adventure: {
    label: "Adventure",
    verb: "Wander",
    color: "#13B6A6",
    Icon: Mountain,
  },
  creative: {
    label: "Creative",
    verb: "Make",
    color: "#7C5CFF",
    Icon: Palette,
  },
  kindness: { label: "Kindness", verb: "Give", color: "#FF6FB5", Icon: Heart },
  food: {
    label: "Taste",
    verb: "Savor",
    color: "#FF9F1C",
    Icon: UtensilsCrossed,
  },
};

export interface DareCardProps {
  number: number;
  title: string;
  blurb: string;
  minutes: number;
  difficulty: 1 | 2 | 3;
  category: DareCategory;
  showIcon?: boolean;
}

function DifficultyDots({
  difficulty,
  color = "#fff",
}: {
  difficulty: 1 | 2 | 3;
  color?: string;
}) {
  return (
    <View style={styles.dots}>
      {[1, 2, 3].map((level) => {
        const filled = level <= difficulty;
        return (
          <View
            key={level}
            style={[
              styles.dot,
              filled
                ? { backgroundColor: color }
                : {
                    backgroundColor: "transparent",
                    borderWidth: 1.6,
                    borderColor: color,
                    opacity: 0.4,
                  },
            ]}
          />
        );
      })}
    </View>
  );
}

export default function DareCard({
  number,
  title,
  blurb,
  minutes,
  difficulty,
  category,
  showIcon = true,
}: DareCardProps) {
  const { label, verb, color, Icon } = CATEGORIES[category];
  const dareNumber = String(number).padStart(2, "0");

  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={styles.decoration} pointerEvents="none">
        <Icon size={200} color="#fff" strokeWidth={1.5} opacity={0.16} />
      </View>

      <View style={styles.chip}>
        {showIcon && <Icon size={14} color="#fff" strokeWidth={2.5} />}
        <Text style={styles.chipText}>
          {verb.toUpperCase()} · {label.toUpperCase()}
        </Text>
      </View>

      <View style={styles.spacer} />

      <Text style={styles.dareNumber}>DARE №{dareNumber}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.blurb}>{blurb}</Text>

      <View style={styles.meta}>
        <View style={styles.metaItem}>
          <Clock size={14} color="#fff" strokeWidth={2.5} />
          <Text style={styles.metaText}>{minutes} min</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaText}>nerve</Text>
          <DifficultyDots difficulty={difficulty} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 440,
    borderRadius: 30,
    paddingVertical: 34,
    paddingHorizontal: 30,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 24 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 12,
  },
  decoration: {
    position: "absolute",
    top: -20,
    right: -30,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.22)",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 100,
  },
  chipText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },
  spacer: {
    flex: 1,
    minHeight: 24,
  },
  dareNumber: {
    color: "#fff",
    opacity: 0.6,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 44,
    fontWeight: "800",
    letterSpacing: -0.8,
    lineHeight: 44 * 0.98,
    marginBottom: 14,
  },
  blurb: {
    color: "#fff",
    fontSize: 16.5,
    fontWeight: "600",
    lineHeight: 16.5 * 1.45,
    marginBottom: 28,
  },
  meta: {
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
});
