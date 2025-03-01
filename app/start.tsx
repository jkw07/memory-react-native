import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function StartScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}> Ready to play?</Text>
      <Button
        title="Start Game"
        onPress={() => router.replace("/memory/game")}
      />
    </View>
  );
}
