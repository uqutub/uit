import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../header/header';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: [],
      name: 'Ali'
    }
  }

  add = () => {
    const todo = this.state.todo;
    todo.push(this.state.todo.length);
    this.setState({ 
      todo
    })
    console.log(this.state.todo.length);
  }


  render() {
    console.log('RERENDER HTML')
    return (
      <div className="App">
        {/* <Header /> */}
       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.add}>
          Add Todo
        </button>
          <p>
            NAME: {this.state.name} { this.state.todo.length }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
















