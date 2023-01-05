import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import realm from "./src/db";
import TodoInsert from './src/components/TodoInsert';
import TodoList from './src/components/TodoList';

const App = () => {
  // todos: {id: Number, textValue: string, checked: boolean, createdDate : string, type : string,
  //          limitDate : string, isAlert : boolean}
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    realm.write(() => {
      realm.create("TodoData", {
        id: "hi",
        createTime: new Date().toString(),
        categoryType: 1,
        content:text,
        checked: false
      });
    });
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onToggle = id => e => {
    console.log("toggle")
    console.log(typeof(id.id))

const todo = realm.objects("TodoData").filtered('id CONTAINS "hi"');
    realm.write(() => {

        todo[0].checked = true
        console.log(todo[0].checked)
        console.log(realm.objects("TodoData"))
    })
    console.log(realm.objects("TodoData"))
//    setTodos(
//        todos.map(todo =>
//            todo.id === id ? {...todo, checked: !todo.checked} : todo,
//        ),
//    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;