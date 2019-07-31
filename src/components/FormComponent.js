import React from 'react'

function FormComponent(props) {
    return (
        <div>
            <h3 className="display-console">Input Console</h3>
        
        <form onSubmit={props.handleSubmit}>
        <div className="outer-form">
          <label className="form-lbl">
            First Name:<br />
            <input 
            type="text" 
            name="firstName" 
            value={props.data.firstName} 
            placeholder="First Name" 
            onChange={props.handleChange}/>
          </label><br />
          <label className="form-lbl">
            Last Name:
           <br /> <input 
            type="text" 
            name="lastName" 
            value={props.data.lastName} 
            placeholder="Last Name" 
            onChange={props.handleChange}/>
          </label>
        </div>

          <br />
          <input type="submit" value="submit" />
        </form>
        
        <hr />
        <div>
          <h3 className="display-console">Output Console</h3>
          <p>{props.data.firstName} {props.data.lastName} </p>
        </div>
        </div>
    )
}

export default FormComponent;
