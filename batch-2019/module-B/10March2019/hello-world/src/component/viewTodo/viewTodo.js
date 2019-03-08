import React, { Component } from 'react';

class ViewTodo extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
    <div>
        Task: {this.props.item.task} <br />
        Desc: {this.props.item.desc}
        <button onClick={() => { this.props.delete(this.props.itemIndex) }}>Delete</button>
        <button onClick={() => this.props.edit(this.props.itemIndex)}>Edit</button>
      </div>
    );
  }
}

export default ViewTodo;




var ShowTodo = (props) => {
    console.log('Stateless', props)
    return(
        <tr>
        <td>Task: {props.item.task} </td>
        <td>Desc: {props.item.desc} </td>
        <td><button onClick={() => { props.delete(props.itemIndex) }}>Delete</button></td>
        <td><button onClick={() => props.edit(props.itemIndex)}>Edit</button></td>
      </tr>
    )
}

export {
    ShowTodo 
}














