import DareCard from "@/components/Discovery/DareCard";
import Header from "@/components/Discovery/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        width: "90%",
      }}
    >
      <Header count={10} />
      <DareCard
        number={1}
        title="Dare 1"
        blurb="Dare 1 blurb"
        minutes={10}
        difficulty={1}
        category="social"
      />
    </SafeAreaView>
  );
}
