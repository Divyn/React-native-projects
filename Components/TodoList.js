import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import TodoItemComponent from './TodoItem';
const todoItems = [
  { key: '0', title: "Create first todo", isCompleted: true },
  { key: '1', title: "Climb a mountain", isCompleted: false },
  { key: '2', title: "Create React Native blog post", isCompleted: false },
 ];
export default function TodoList({todoItems, ...props}) {
  console.log(todoItems)
  return (
    
    <FlatList style={styles.container}
      data={todoItems}
      
      renderItem={({item, index, section}) => <TodoItemComponent {...item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});