import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function BlogPostForm({
  submitHandle,
  initialValues,
  buttonText,
}) {
  const [title, setTitle] = useState(initialValues?.title);
  const [content, setContent] = useState(initialValues?.content);

  useEffect(() => {
    setContent(initialValues.content);
    setTitle(initialValues.title);
  }, [initialValues]);

  return (
    <View style={styles.main}>
      <Text style={styles.header}>Başlığı Giriniz:</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.header}>İçeriği Giriniz:</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <View style={styles.buttonMain}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => submitHandle(title, content)}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>İptal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  header: {
    fontSize: 20,
    marginLeft: 10,
  },
  textInput: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    padding: 15,
    fontSize: 18,
    marginBottom: 25,
  },
  buttonMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  submitButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 45,
  },
});
