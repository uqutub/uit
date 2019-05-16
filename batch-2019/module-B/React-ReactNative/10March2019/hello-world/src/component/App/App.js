import React, { Component } from 'react';
import './App.css';
import Header from '../header/header';
import {ShowTodo} from '../viewTodo/viewTodo';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: [],
      name: 'Ali',
      taskText: '',
      descText: '',
      isUpdate: false,
      foo: 'Header Text'
    }
    setTimeout(() => {
      this.setState({foo: 'Text Chnaged Foo'})
    }, 600)
  }

  add = (ev) => {
    const todo = this.state.todo;
    todo.push({
      task: this.state.taskText,
      desc: this.state.descText
    });
    console.log("before add")
    this.setState({ 
      todo,
      taskText: '',
      descText: ''
    }, function(){
      console.log("Adding done!");
      alert("Item has been added successfully!")
    })
    console.log("after add")
    console.log(this.state.todo.length);
    ev.preventDefault();
  }

  update = (ev) => {
    console.log('updated....')
    ev.preventDefault();
  }

  onChangeHandler = (ev) => {
    this.setState(
      {[ev.target.name]: ev.target.value}, () => {
        console.log('this state', this.state)
      })
    
  }

  onDeleteHandler = (id) => {
     console.log('delete clicked', id);
     const todo = this.state.todo;
     todo.splice(id, 1);
     this.setState({todo});
  }

  onEditHandler = (id) => {
    console.log('edit clicked', this.state.todo[id])
    this.setState({isUpdate: true});
  }

  foo = () => {
      return (<h1>Foo</h1>);
  }

  bar = () => (<h1>bar</h1>)

  toDoForm = () => {
    return ( <form>
    <input type="text" name="taskText" value={this.state.taskText} onChange={this.onChangeHandler} />
    <input type="text" name="descText" value={this.state.descText} onChange={this.onChangeHandler} />
    {
      (this.state.isUpdate) ? 
            (<button onClick={this.update}>
              Update
            </button>) 
          : 
       (<button onClick={this.add}>
       Add Todo
      </button>)
    
    }
      
  </form>)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }


  render() {
    console.log('RERENDER HTML')
    return (
      <div className="App">
       
        <header className="App-header">
         
          {this.toDoForm()}
          {this.state.todo.length &&  <table width="300" border="1">
          {
            this.state.todo.map((i, index) => (
              <ShowTodo key={index} item={i} itemIndex={index} delete={this.onDeleteHandler} edit={this.onEditHandler}/>
            ))
          }
          </table>}
          <p>
            NAME: {this.state.name} { this.state.todo.length }
          </p>
        </header>
        <Header foo={this.state.foo} bar={"bar text"} />

      </div>
    );
  }
}

export default App;




// src
//   assets 
//       images
//   components
//     App 
//        App.css
//        App.js
//        App.test.js
//     SecondCom
//   index.js
//   index.css
















