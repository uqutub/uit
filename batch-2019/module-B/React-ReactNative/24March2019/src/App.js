import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { CounterAction } from './store/action/counter';
import { TodoAction } from './store/action/todo';

class App extends Component {

componentWillReceiveProps(nextProps) {
  console.log('nextprops ...', nextProps);
}
  render() {
    return (
      <div className="App">
        
        <div>
          
          <h1> Count: {this.props.count} </h1>

          <button onClick={this.props.incrementFnc}>
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
      user: state.CounterReducer.user,
      todos: state.TodoReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
      incrementFnc: () => dispatch(CounterAction.increment()),
      decrementFnc: () => dispatch(CounterAction.decrement()),
      setUser: (p) => dispatch(CounterAction.setMyUser(p)),
      addTodo: (p) => dispatch(TodoAction.addTodo(p)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
