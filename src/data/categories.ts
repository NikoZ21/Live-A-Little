import {
  Heart,
  MessageCircle,
  Mountain,
  Pencil,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react-native";

export type DareCategory =
  | "social"
  | "adventure"
  | "creative"
  | "kindness"
  | "food";

export type DareCategoryType = {
  label: string;
  tint: string;
  color: string;
  Icon: LucideIcon;
};

export const CATEGORY_META: Record<DareCategory, DareCategoryType> = {
  social: {
    label: "Social",
    tint: "#FFE9E9",
    color: "#FF5A5F",
    Icon: MessageCircle,
  },
  adventure: {
    label: "Adventure",
    tint: "#DBF6F2",
    color: "#13B6A6",
    Icon: Mountain,
  },
  creative: {
    label: "Creative",
    tint: "#EBE6FF",
    color: "#7C5CFF",
    Icon: Pencil,
  },
  kindness: {
    label: "Kindness",
    tint: "#FFE6F3",
    color: "#FF6FB5",
    Icon: Heart,
  },
  food: {
    label: "Taste",
    tint: "#FFF0D6",
    color: "#FF9F1C",
    Icon: UtensilsCrossed,
  },
};
