import React, { Component } from "react";
import FormComponent from './FormComponent';
import '../../src/App.css';

class Form extends Component {
    constructor() {
        super()
        this.state = {
          firstName: '',
          lastName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      const {name, value} = event.target //look up "React Synthetic Event"
      this.setState({
        [name]: value
      })
    }

    handleSubmit(event){
      // eslint-disable-next-line
      alert("The form was submitted Successfully!!" +' '+ ' ' + this.state.firstName + ' ' +this.state.lastName);
      event.preventDefault();
    }

  render() {
    return (
      <div>
        <FormComponent 
         handleChange={this.handleChange}
         handleSubmit={this.handleSubmit} 
         data={this.state}/>
      </div>
    );
  }
}
export default Form;
