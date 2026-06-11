import { Tabs } from "expo-router";
import { Book, Compass, History, User } from "lucide-react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabsLayout() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Tabs screenOptions={{ tabBarActiveTintColor: "#FF5A36" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Discover",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Compass color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="storybook"
          options={{
            title: "Storybook",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Book color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <History color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
