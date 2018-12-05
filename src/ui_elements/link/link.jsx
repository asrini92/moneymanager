import React, { Component } from 'react';
import './link.css';
class Link extends Component {
  render() {
      const Id = this.props.name + "_link_id";
      const Name = this.props.name + "_link_name";
      const Target = !this.props.target ? "_self" : "_blank";
    return (
      <div className="Link">
        <a 
            id = {Id}
            name = {Name}
            href = {this.props.href}
            target = {Target}
            >
            {this.props.name}
        </a>
      </div>
    );
  }
}

export default Link;