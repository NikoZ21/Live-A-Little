import Header from "@/components/Discovery/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Header count={10} />
    </SafeAreaView>
  );
}
