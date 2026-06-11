export type DareCategory =
  | "social"
  | "adventure"
  | "creative"
  | "kindness"
  | "food";
export interface Dare {
  id: number;
  title: string;
  blurb: string;
  minutes: number;
  difficulty: 1 | 2 | 3; // nerve dots
  category: DareCategory;
}

export const DARES: Dare[] = [
  {
    id: 1,
    title: "Compliment a stranger",
    blurb:
      "Something genuine — their jacket, their dog, their laugh. Watch their day change.",
    minutes: 5,
    difficulty: 2,
    category: "social",
  },
  {
    id: 2,
    title: "Take the long way home",
    blurb: "A street you've never walked down. No maps. See where it goes.",
    minutes: 20,
    difficulty: 1,
    category: "adventure",
  },
  {
    id: 3,
    title: "Draw the view",
    blurb:
      "Whatever's in front of you. It doesn't need to be good — just looked at closely.",
    minutes: 10,
    difficulty: 1,
    category: "creative",
  },
  {
    id: 4,
    title: "Leave a kind note",
    blurb:
      "On a windshield, in a library book, by the office kettle. Anonymous is fine.",
    minutes: 5,
    difficulty: 1,
    category: "kindness",
  },
  {
    id: 5,
    title: "Order the weirdest thing",
    blurb: "The menu item you always skip past. Tonight it's yours.",
    minutes: 30,
    difficulty: 2,
    category: "food",
  },
  {
    id: 6,
    title: "Call someone you miss",
    blurb: "No reason needed. Just to hear their voice for a minute.",
    minutes: 10,
    difficulty: 1,
    category: "social",
  },
  {
    id: 7,
    title: "Watch the sunrise",
    blurb: "Set the alarm. Find a good spot. Phones stay in pockets.",
    minutes: 45,
    difficulty: 3,
    category: "adventure",
  },
  {
    id: 8,
    title: "Write a tiny poem",
    blurb:
      "Four lines about the last thing that made you smile. Rhyming optional.",
    minutes: 10,
    difficulty: 2,
    category: "creative",
  },
  {
    id: 9,
    title: "Buy a coffee behind you",
    blurb: "Pay for the next person in line and leave before they notice.",
    minutes: 5,
    difficulty: 2,
    category: "kindness",
  },
  {
    id: 10,
    title: "Cook something new",
    blurb: "A dish you've never attempted. Burnt edges count as character.",
    minutes: 60,
    difficulty: 3,
    category: "food",
  },
];
