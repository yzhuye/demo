import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Ejemplos de Ciclo de Vida</Text>
      <Text style={styles.subtitle}>React Native App</Text>

      <TouchableOpacity
        style={[styles.button, styles.buttonWithState]}
        onPress={() => navigation.navigate("WithAppState")}
      >
        <Text style={styles.buttonText}>🎬 Con AppState</Text>
        <Text style={styles.buttonDescription}>
          Maneja el ciclo de vida de la app
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonWithoutState]}
        onPress={() => navigation.navigate("WithoutAppState")}
      >
        <Text style={styles.buttonText}>🎬 Sin AppState</Text>
        <Text style={styles.buttonDescription}>
          Sin manejo del ciclo de vida
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
  },
  button: {
    width: "100%",
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonWithState: {
    backgroundColor: "#4CAF50",
  },
  buttonWithoutState: {
    backgroundColor: "#FF6347",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  buttonDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
  },
  infoBox: {
    marginTop: 30,
    padding: 16,
    backgroundColor: "#E3F2FD",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#2196F3",
  },
  infoText: {
    fontSize: 14,
    color: "#1976D2",
    textAlign: "center",
  },
});
