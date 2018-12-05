import React, { Component } from 'react';
import './button.css';
class Button extends Component {
  // constructor(props){
  //   super(props);
  //   //todo

  // }

  render() {
      const Id = this.props.name + "_button_id";
      const Name = this.props.name + "_button_name";
    return (
      <div className="button">
        <input type="button" 
            id = {Id}
            name = {Name}
            onClick = {this.props.onClickHandler}
            value = {this.props.name}
            >
        </input>
      </div>
    );
  }
}

export default Button;