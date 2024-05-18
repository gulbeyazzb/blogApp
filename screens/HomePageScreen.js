import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function HomePageScreen({ navigation }) {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <TouchableOpacity onPress={addBlogPost}>
        <Text>Ekle</Text>
      </TouchableOpacity>
      <FlatList
        data={state}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
