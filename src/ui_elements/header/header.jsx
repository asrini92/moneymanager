import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h2>
            {this.props.value}
        </h2>
      </div>
    );
  }
}

export default Header;