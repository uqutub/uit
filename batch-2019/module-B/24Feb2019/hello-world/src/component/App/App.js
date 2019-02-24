import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../header/header';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: [],
      name: 'Ali',
      taskText: '',
      descText: '',
      isUpdate: false
    }
  }

  add = (ev) => {
    const todo = this.state.todo;
    todo.push({
      task: this.state.taskText,
      desc: this.state.descText
    });
    this.setState({ 
      todo,
      taskText: '',
      descText: ''
    })
    console.log(this.state.todo.length);
    ev.preventDefault();
  }

  update = (ev) => {
    console.log('updated....')
    ev.preventDefault();
  }

  onChangeHandler = (ev) => {
    // console.log('TextChanged Valye....', ev.target.value)
    // console.log('TextChanged anme....', ev.target.name)

    this.setState(
      {[ev.target.name]: ev.target.value}, () => {
        console.log('this state', this.state)
      })


    // if(ev.target.name == 'task') {
    //   this.setState({task: ev.target.value})
    // }
    // if(ev.target.name == 'desc') {
    //   this.setState({desc: ev.target.value})
    // }
    
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


  render() {
    console.log('RERENDER HTML')
    return (
      <div className="App">
        <Header foo={'My Foo Text'} bar={"bar text"} />
       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.foo()}
          <form>
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
              
          </form>

          {
            this.state.todo.map((item, index) => (
              <div>
                Task: {item.task} <br />
                Desc: {item.desc}
                <button onClick={() => { this.onDeleteHandler(index) }}>Delete</button>
                <button onClick={() => this.onEditHandler(index)}>Edit</button>
              </div>
            ))
          }
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
















