import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = props => {
   return (
    <TouchableOpacity style={styles.item} 
      onPress={props.onDelete}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      }
});

export default TodoItem;