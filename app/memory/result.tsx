import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ResultScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Congratulations! You won the game!</Text>
      <Button title="Back to Home" onPress={() => router.replace("/")} />
    </View>
  );
}
