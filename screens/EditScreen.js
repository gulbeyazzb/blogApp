import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "@/context/BlogContext";

export default function EditScreen({ navigation, route }) {
  const id = route.params.id;
  const { state, editBlogPost } = useContext(Context);
  const [data, setData] = useState();

  const submitHandle = (title, content) => {
    editBlogPost(id, title, content);
    navigation.navigate("Home");
  };

  useEffect(() => {
    setData(state.find((post) => post.id === id.id));
  }, [id]);

  return (
    <BlogPostForm
      initialValues={{ title: data?.title, content: data?.content }}
      buttonText={"Güncelle"}
      submitHandle={submitHandle}
    />
  );
}

const styles = StyleSheet.create({});
