/* import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)/index" options={{ title: "Home" }} />
      <Stack.Screen name="hello" options={{ title: "Hello Page" }} />
    </Stack>
  );
}
 */

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* Dolna nawigacja (Tabs) */}
      <Stack.Screen name="(tabs)/index" options={{ title: "Home" }} />

      {/* Ekrany quizu */}
      <Stack.Screen name="start" options={{ title: "Start Quiz" }} />
      <Stack.Screen name="quiz/question" options={{ title: "Quiz Question" }} />
      <Stack.Screen name="quiz/result" options={{ title: "Quiz Result" }} />
    </Stack>
  );
}
