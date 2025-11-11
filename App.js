import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import WithoutAppState from "./screens/WithoutAppState";
import WithAppState from "./screens/WithAppState";

export default function App() {
  const [screen, setScreen] = React.useState(null);

  if (screen === "without") return <WithoutAppState goBack={() => setScreen(null)} />;
  if (screen === "with") return <WithAppState goBack={() => setScreen(null)} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Demo: Ciclo de vida en React Native</Text>
      <TouchableOpacity style={styles.button} onPress={() => setScreen("without")}>
        <Text style={styles.buttonText}>Sin AppState</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setScreen("with")}>
        <Text style={styles.buttonText}>Con AppState</Text>
      </TouchableOpacity>
      <Text style={styles.note}>
        Observa cómo el comportamiento cambia al ir al fondo o cerrar la app.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 40, textAlign: "center" },
  button: { backgroundColor: "#4a90e2", padding: 15, borderRadius: 10, marginVertical: 10 },
  buttonText: { color: "white", fontSize: 18 },
  note: { marginTop: 40, fontSize: 14, color: "gray", textAlign: "center" },
});
