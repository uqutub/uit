import React, { Component } from 'react';

class Header extends Component {

  componentWillReceiveProps(nextProps) {
     console.log('nextProps ', nextProps, this.props)
  }

  comp

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Header {this.props.foo}</h1>
      </div>
    );
  }
}

export default Header