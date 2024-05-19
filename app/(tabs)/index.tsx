import { Image, StyleSheet, Platform, TouchableOpacity } from "react-native";
import CreateScreen from "../../screens/CreateScreen";
import HomePageScreen from "../../screens/HomePageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "../../context/BlogContext";
import ShowScreen from "../../screens/ShowScreen";
import EditScreen from "../../screens/EditScreen";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Provider>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerTitle: "Benim Blogum" }}>
          <Stack.Screen
            name="Home"
            component={HomePageScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen
            name="ShowScreen"
            component={ShowScreen}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params })
                  }
                >
                  <AntDesign name="edit" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
