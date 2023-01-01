// components/TodoList.js
import React from 'react';
import {StyleSheet, ScrollView, Text, SectionList} from 'react-native';
import TodoListItem from './TodoListItem';
import realm from ".././db";


const TodoList = ({onRemove, onToggle}) => {
  const tasks = realm.objects("TodoData");
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
     {tasks.map(item => (
        <TodoListItem key={item.id}
                      content={item.content}
                     checked={item.checked}
                     onToggle={() => onToggle(item)}
                     onRemove={() => onRemove(item)} />
     ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;