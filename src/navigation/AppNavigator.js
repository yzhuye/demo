import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import VideoWithAppState from "../screens/VideoWithAppState";
import VideoWithoutAppState from "../screens/VideoWithoutAppState";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6200EE",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Ciclo de Vida App" }}
        />
        <Stack.Screen
          name="WithAppState"
          component={VideoWithAppState}
          options={{ title: "Con AppState" }}
        />
        <Stack.Screen
          name="WithoutAppState"
          component={VideoWithoutAppState}
          options={{ title: "Sin AppState" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
