import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import DetailPage from "./src/screens/DetailPage";
import Feeds from "./src/screens/Feeds";
import Profile from "./src/screens/Profile";

const Stack = createSharedElementStackNavigator();

const options = {
  gestureEnabled: true,
  transitionSpec: {
    open: { animation: "timing", config: { duration: 300 } },
    close: { animation: "timing", config: { duration: 300 } },
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "none",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Feeds" component={Feeds} />
      <Stack.Screen name="Detail" component={DetailPage} options={options} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <MyStack />
    </NavigationContainer>
  );
}
