import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { CounterAction } from './store/action/counter';

class App extends Component {

  setUser = () => {
    this.props.setUser({name: 'Yousuf'})
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      count: state.CounterReducer.count,
      user: state.CounterReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
      incrementFnc: () => dispatch(CounterAction.increment()),
      decrementFnc: () => dispatch(CounterAction.decrement()),
      setUser: (p) => dispatch(CounterAction.setMyUser(p))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
