import React, { useEffect, useRef, useState } from "react";
import { View, Text, Button, AppState, StyleSheet } from "react-native";

export default function VideoWithAppState() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [appState, setAppState] = useState(AppState.currentState);
  const intervalRef = useRef(null);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    }
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const sub = AppState.addEventListener("change", (nextState) => {
      setAppState(nextState);

      if (nextState === "background") {
        stop();
        setIsPlaying(false);
      }
    });

    return () => sub.remove();
  }, []);

  useEffect(() => {
    if (isPlaying) start();
    else stop();

    return () => stop();
  }, [isPlaying]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Reproductor con AppState</Text>
      <Text style={styles.time}>{time}s</Text>
      <Button
        title={isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
        onPress={() => setIsPlaying(!isPlaying)}
      />
      <Text style={styles.state}>Estado app: {appState}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  time: { fontSize: 40, color: "green", marginBottom: 10 },
  state: { fontSize: 16, color: "gray" },
  hint: { textAlign: "center", color: "gray", marginTop: 10, paddingHorizontal: 20 },
});
