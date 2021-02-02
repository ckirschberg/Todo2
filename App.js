import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [newTodo, setNewTodo] = useState('');
  const [myTodos, setTodo] = useState([]);

  // Function definition - (enteredText is variable name of local var.)
  const todoInputHandler = (enteredText) => {
    setNewTodo(enteredText); // Calling 'setter'(function) defined on line 6.
  };
  const addTodoHandler = () => {
    setTodo(currentTodos => [...currentTodos, newTodo]);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Add new todo" value={newTodo}
        onChangeText={todoInputHandler} />
      
      <Button title="Add Todo" onPress={addTodoHandler}></Button>

      {/* <FlatList /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
