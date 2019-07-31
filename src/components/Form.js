import React, { Component } from "react";

class Form extends Component {
    constructor(){
        super()
        this.state = {
          firstName: '',
          lastName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
      const {name, value} = e.target //look up "React Synthetic Event"
      this.setState({
        [name]: value
      })
    }

    handleSubmit(e){
      alert("The form was submitted Successfully!!" +' '+ ' ' + this.state.firstName + ' ' +this.state.lastName);
      e.preventDefault();
    }

  render() {
    return (
      <div>
        <h3>Input Console</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input 
            type="text" 
            name="firstName" 
            value={this.state.firstName} 
            placeholder="First Name" 
            onChange={this.handleChange}/>
          </label><br />
          <label>
            Last Name:
            <input 
            type="text" 
            name="lastName" 
            value={this.state.lastName} 
            placeholder="Last Name" 
            onChange={this.handleChange}/>
          </label>
          <br />
          <input type="submit" value="submit" />
        </form>
        <hr />
        <div>
          <h3>Output Console</h3>
          <p>{this.state.firstName} {this.state.lastName} </p>
        </div>
      </div>
    );
  }
}
export default Form;
