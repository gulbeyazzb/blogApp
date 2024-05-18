import { Image, StyleSheet, Platform } from "react-native";
import CreateScreen from "../../screens/CreateScreen";
import HomePageScreen from "../../screens/HomePageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "../../context/BlogContext";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Provider>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerTitle: "Benim Blogum" }}>
          <Stack.Screen name="Home" component={HomePageScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
