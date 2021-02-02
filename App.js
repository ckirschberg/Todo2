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
  
  // When the user clicks the button, this function is called.
  const addTodoHandler = () => {
    // This is setting the myTodos variable in the state, as it sets it, it retrieves
    // a snapshot (it is a function), and the following: [...currentTodos, newTodo] will
    // read the array and create a new array and copy the existing values into the new array
    // and the second parameter (newTodo) will be added to the new array.
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
