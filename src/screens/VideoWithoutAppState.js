import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function VideoWithoutAppState() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Reproductor sin manejo del ciclo</Text>
      <Text style={styles.time}>{time}s</Text>
      <Button
        title={isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
        onPress={() => setIsPlaying(!isPlaying)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  time: { fontSize: 40, color: "tomato", marginBottom: 10 },
  hint: { textAlign: "center", color: "gray", marginTop: 10, paddingHorizontal: 20 },
});
