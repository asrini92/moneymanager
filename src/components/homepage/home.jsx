import React, { Component } from 'react';
import Button from '../../ui_elements/button/button.jsx';
import AdminHome from '../Admin/adminHome.jsx';
import ClientHome from '../Client/clientHome.jsx';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: true,
            Admin: false,
            Client: false,
        };
    }
    onClickHandler(event){
        if (event.target.value === "Admin"){
            this.setState({ login: false, Admin: true , Client:false });
        } else {
            this.setState({ login: false, Admin: false , Client:true });
        }
    };
  render() {
    return (
      <div className="Home">
        { this.state.login &&
            <div> 
                <header className="App-header">
                    <p>
                        TODO - Select one.
                    </p>  
                    <Button name="Admin" onClickHandler={this.onClickHandler.bind(this)}/>
                    <Button name="Client" onClickHandler={this.onClickHandler.bind(this)}/>
                </header>
            </div>            
        } 
        { (!this.state.login &&  this.state.Admin)  &&
            <div>   
                <AdminHome / >
            </div>     
        }
        {
            (!this.state.login &&  this.state.Client)  &&
            <div>
                <ClientHome / > 
            </div> 
        }
      </div>
    );
  }
}

export default Home;
