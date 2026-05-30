import { FlameIcon } from "lucide-react-native";
import { Text, View } from "react-native";

interface HeaderProps {
  count: number;
}

export default function Header({ count }: HeaderProps) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 14,
        paddingHorizontal: 20,
        paddingBottom: 6,
      }}
    >
      <Text
        style={{
          fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
          fontSize: 26,
          fontWeight: "bold",
        }}
      >
        Live <Text style={{ color: "#FF5A36" }}>a little</Text>
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "bold", backgroundColor: "" }}>
        <FlameIcon size={16} color="#FF5A36" /> {count} active
      </Text>
    </View>
  );
}
