import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

const images = [
  require("../../assets/memory/img (1).png"),
  require("../../assets/memory/img (2).png"),
  require("../../assets/memory/img (3).png"),
  require("../../assets/memory/img (4).png"),
  require("../../assets/memory/img (5).png"),
  require("../../assets/memory/img (6).png"),
];

const shuffledCards = [...images, ...images].sort(() => Math.random() - 0.5);

export default function GameScreen() {
  const router = useRouter();
  const [cards, setCards] = useState(
    shuffledCards.map((img, i) => ({
      id: i,
      img,
      flipped: false,
      matched: false,
    }))
  );
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;
      if (cards[first].img === cards[second].img) {
        setCards((prev) =>
          prev.map((card, i) =>
            i === first || i === second ? { ...card, matched: true } : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, i) =>
              i === first || i === second ? { ...card, flipped: false } : card
            )
          );
        }, 1000);
      }
      setSelectedCards([]);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (cards.every((card) => card.matched)) {
      setTimeout(() => router.replace("/memory/result"), 500);
    }
  }, [cards]);

  interface Card {
    id: number;
    img: any;
    flipped: boolean;
    matched: boolean;
  }

  const handleCardPress = (index: number) => {
    if (
      selectedCards.length < 2 &&
      !cards[index].flipped &&
      !cards[index].matched
    ) {
      setCards((prev: Card[]) =>
        prev.map((card, i) => (i === index ? { ...card, flipped: true } : card))
      );
      setSelectedCards([...selectedCards, index]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Game</Text>
      <View style={styles.grid}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCardPress(index)}
            style={styles.card}
          >
            {card.flipped || card.matched ? (
              <Image source={card.img} style={styles.image} />
            ) : (
              <View style={styles.cover} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36, marginBottom: 20, fontWeight: "bold" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  card: {
    width: 100,
    height: 100,
    margin: 7,
    borderRadius: 10,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    width: 100,
    height: 100,
    backgroundColor: "#00CE8F",
    borderRadius: 10,
  },
  image: { width: 100, height: 100, borderRadius: 10 },
});
