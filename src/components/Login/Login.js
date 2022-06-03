import React from 'react';
import './index.css';
import { FormButton, FormHeader, FormInput, Form  } from './form_part';

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);

class LoginForm extends React.Component{
  render(){
    return(
      <div className="LoginFormed">
        <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    </div> 
    )
  }
}


export default LoginForm