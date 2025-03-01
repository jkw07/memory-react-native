import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.title}>How to Play Memory Game</Text>
      <Text style={styles.text}>1️. Tap any two cards to flip them over.</Text>
      <Text style={styles.text}>
        2. If the images match, they stay revealed.
      </Text>
      <Text style={styles.text}>
        3. If they don't match, they flip back after a second.
      </Text>
      <Text style={styles.text}>
        4. Try to remember the positions of the cards and find all the pairs.
      </Text>
      <Text style={styles.text}>
        5. The game ends when all pairs are matched.
      </Text>
      <Text style={styles.text}>6. Have fun and test your memory skills!</Text>
      <Text style={styles.text}>Good luck!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  text: { fontSize: 20, justifyContent: "flex-start", textAlign: "left" },
});
