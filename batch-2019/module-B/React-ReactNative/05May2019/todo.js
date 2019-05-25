import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { Input, Item, Label, Button } from "native-base";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: ""
    };
  }

  addTodo = () => {
    let allTodos = [...this.state.todos];
    allTodos.push(this.state.todo);
    this.setState({ todos: allTodos });
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View
          style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}
        >
          {/* <TextInput
            placeholder="Enter Todo"
            style={{ width: "90%", alignSelf: "center" }}
            onChangeText={(todo)=>this.setState({todo})}
          /> */}
          <Item floatingLabel>
            <Label>Username</Label>
            <Input onChangeText={todo => this.setState({ todo })} />
          </Item>
          {/* <TouchableOpacity
            style={{
              height: 50,
              width: 80,
              backgroundColor: "blue",
              justifyContent:"center",
              alignItems:"center"
            }}
            onPress={this.addTodo}
          >
            <Text style={{color:"white"}} >Add Todo</Text>
          </TouchableOpacity> */}
          <Button success onPress={this.addTodo}>
            <Text> Light </Text>
          </Button>
        </View>

        <View
          style={{
            flex: 2,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Text style={{color:"white",fontSize:18}} >{this.state.todos.length}</Text> */}
          {/* <ScrollView>
        {this.state.todos.map((todo)=>{
          return(
            <View style={{height:60}} ><Text style={{color:"white"}} >{todo}</Text></View>
          )
        })}
        </ScrollView> */}
          <FlatList
            data={this.state.todos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <View style={{ height: 60, flexDirection: "row" }}>
                  <Text style={{ color: "white" }}>{index} </Text>
                  <Text style={{ color: "white" }}>{item}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
