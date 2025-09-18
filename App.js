import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import af vores tre skærme
import HomeScreen from "./screens/HomeScreen";
import OffersScreen from "./screens/OffersScreen";
import InfoScreen from "./screens/InfoScreen";

// Her opretter vi en stack-navigator
const Stack = createNativeStackNavigator();

// NavigationContainer er en slags “container” for navigationen
// Stack.Navigator indeholder de forskellige skærme (Stack.Screen)

export default function App() { //
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
        <Stack.Screen name="Offers" component={OffersScreen} options={{ title: "Tilbud" }} />
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
