import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);

  const submitHandle = (title, content) => {
    addBlogPost(title, content);
    navigation.navigate("Home");
  };

  return (
    <BlogPostForm
      submitHandle={submitHandle}
      buttonText={"Kaydet"}
      initialValues={{ title: "", content: "" }}
    />
  );
}

const styles = StyleSheet.create({});
