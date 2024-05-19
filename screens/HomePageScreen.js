import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

export default function HomePageScreen({ navigation }) {
  const { state, addBlogPost, removeBlogPost } = useContext(Context);

  return (
    <View>
      {/* <TouchableOpacity style={styles.addBtn} onPress={addBlogPost}>
        <Text style={styles.addText}>Ekle</Text>
      </TouchableOpacity> */}
      <FlatList
        data={state}
        keyExtractor={(state) => state.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("ShowScreen", { id: item.id })}
            >
              <View style={styles.contentColumns}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.title}>{item.content}</Text>
              </View>
              <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                <Feather name="trash" size={24} color="black" />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentColumns: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
  },
  title: {
    fontSize: 18,
  },
  addBtn: {
    backgroundColor: "blue",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: "wight",
    borderRadius: 15,
  },
});
