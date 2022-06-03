
import React from "react";
import { useNavigate } from "react-router-dom";

export const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


export const Form = props => {
  
   return (
    <div>
      <FormInput description="Username" placeholder="Enter your username" type="text" />
      <FormInput description="Password" placeholder="Enter your password" type="password"/>
      <FormButton title="Log in" />
    </div>
   )  
}

export const FormButton = props => {
  const navigate = useNavigate();
  console.log("Clicked");
  return(
    <div id="button" className="rowInsideForm">
      <button onClick={() => {navigate("/dashboard")}}>{props.title}</button>
    </div>
  )
  
}

export const FormInput = props => (
  <div className="rowInsideForm">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);