import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function WithoutAppState({ goBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const duration = 60;

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const progress = (time / duration) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.videoBox}>
        <Text style={styles.fakeVideoText}>🎞️ Simulando Video...</Text>
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => setIsPlaying(!isPlaying)}
        >
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={40}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.controls}>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>

        <Text style={styles.timer}>
          {time}s / {duration}s
        </Text>
      </View>
      <Button style={styles.backButton} title="Volver al menú" onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  videoBox: {
    width: "100%",
    height: 200,
    backgroundColor: "#111",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  fakeVideoText: {
    color: "#666",
    fontSize: 16,
  },
  playButton: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 50,
    padding: 15,
  },
  controls: {
    width: "100%",
    alignItems: "center",
  },
  progressBarContainer: {
    width: "90%",
    height: 8,
    backgroundColor: "#333",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
  timer: {
    color: "#fff",
    fontSize: 16,
  },
  state: {
    marginTop: 20,
    color: "#aaa",
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#222",
    borderRadius: 8,
  },
});
