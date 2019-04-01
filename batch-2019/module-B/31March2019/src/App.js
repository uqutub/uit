import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { CounterAction } from './store/action/counter';
import { TodoAction } from './store/action/todo';
import { UserAction } from './store/action/userData';
class App extends Component {
constructor(props){
  super(props);
  
}
componentWillReceiveProps(nextProps) {
  console.log('nextprops ...', nextProps);
}

incermentDelay = () => {
  // fetch, AXIOS, Observable.AJAX
  this.props.myLogin();
  setTimeout(() => {
    this.props.incrementFnc()
  }, 2000)
}
  render() {
    return (
      <div className="App">
        
        <div>
          
          <h1> Count: {this.props.count} </h1>

          {
            this.props.isProcess ? <h3>Loader Counter</h3> : null
          } 

          {
            this.props.userDataProcessing ? <h3>Loader API GET USER</h3> : null
          }
          {
            this.props.userData ? <h3>{this.props.userData.login}</h3> : null
          }
          <button onClick={this.props.getUser}>
              Fetch User Data
          </button> 
          <button onClick={this.incermentDelay}>
              INCREMENT BUTTON
          </button>  
            <button onClick={this.props.decrementFnc}>
              DESCREMENT BUTTON
          </button>
          {this.props.user && this.props.user.name}
          <button onClick={() => this.props.setUser({name: 'Yousuf'})}>
            Set My User
          </button>

        </div>
        <div>
          {this.props.todos.length}
          <button onClick={this.props.addTodo}>
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      count: state.CounterReducer.count,
      isProcess: state.CounterReducer.isProcess,
      user: state.CounterReducer.user,
      todos: state.TodoReducer.todos,
      userData:state.UserReducer.user,
      userDataProcessing: state.UserReducer.isProcess
  }
}

const mapDispatchToProps = dispatch => {
  return {
      incrementFnc: () => dispatch(CounterAction.increment()),
      decrementFnc: () => dispatch(CounterAction.decrement()),
      setUser: (p) => dispatch(CounterAction.setMyUser(p)),
      addTodo: (p) => dispatch(TodoAction.addTodo(p)),
      getUser:()=> dispatch(UserAction.getUserData()),
      myLogin:()=> dispatch(CounterAction.callLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
