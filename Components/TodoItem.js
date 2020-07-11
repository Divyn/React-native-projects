import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const todoItems = [
  { key: '0', title: "Create first todo", isCompleted: true },
  { key: '1', title: "Climb a mountain", isCompleted: false },
  { key: '2', title: "Create React Native blog post", isCompleted: false },
 ];
export default function TodoItem({title, ...props}) {
  console.log("title inside todoitem")
  console.log(title)
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{title}</Text>
      </View>
      <View style={styles.border} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 40,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  border: {
    height: 1,
    backgroundColor: '#aaa',
  },
});