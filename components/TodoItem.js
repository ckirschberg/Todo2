import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TodoItem = props => {
   return (
    <View style={styles.item}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
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