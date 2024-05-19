import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function ShowScreen({ route }) {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    flexDirection: "column",
    margin: "auto",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "lightyellow",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
    color: "red",
    fontWeight: "bold",
  },

  content: {
    fontSize: 20,
    marginVertical: 10,
    padding: 5,
  },
});
