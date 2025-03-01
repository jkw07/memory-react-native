/* import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 36 }}>siala</Text>
      <Button title="Go to Hello" onPress={() => router.push("/hello")} />
      <Button title="Go to Explore" onPress={() => router.push("/explore")} />
    </View>
  );
}
 */

import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}> Welcome to Memory Game!</Text>
      <Button title="Start Game" onPress={() => router.push("../../start")} />
    </View>
  );
}
