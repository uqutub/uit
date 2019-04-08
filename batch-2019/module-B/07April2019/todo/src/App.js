import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ItemsAction } from './store/itemsAction';
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      item: '',
      todos: []
    }
  }
  handleText = (ev)=>{
    this.setState({item: ev.target.value});
  }

  addItem = () =>{
    const items = this.state.todos;
    items.push(this.state.item);
    this.setState({todos: items, item: ''},()=>{
      this.props.addItemToReducer(items);
    });
  }

  componentDidMount(){
    console.log(this.props.savedTodos)
    this.setState({todos: this.props.savedTodos});
  }

  displayList = () => {
    return (this.state.todos.map((item, ind)=>{
      return <div key={ind}>{item}</div>
    }));
  }
  
  render() {
    // console.log(this.props.savedTodos)
    return (
      <div>
        Enter Items: 
        <input type="text" onChange={this.handleText} value={this.state.item}/>
        <button onClick={this.addItem}>Add Item</button>

        {this.state.todos.length &&<h3>Item List:</h3> }
        {this.displayList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedTodos: state.ItemsReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToReducer: (todos) => dispatch(ItemsAction.saveTodo(todos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
