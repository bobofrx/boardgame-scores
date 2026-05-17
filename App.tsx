import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./src/screens/HomeScreen";
// import GameScreen from "./src/screens/GameScreen";
import AuthScreen from "./src/screens/AuthScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Boardgame Scores" }} /> */}
        {/* <Stack.Screen name="Game" component={GameScreen} options={{ title: "Détails du jeu" }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}