import React, { useContext, useState } from "react";
import {
  BoldLink,
  SignupBoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import Signup from "../../../services/auth/signup.service";
import Login from "../../../services/auth/login.service";
import Swal from "sweetalert2";

export function SignupForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFNameInput = event => {
    setFirstName(event.target.value);
  };

  const handleLNameInput = event => {
    setLastName(event.target.value);
  };

  const handleEmailInput = event => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      "firstname": firstName,
      "lastname": lastName,
      "email": email,
      "password": password
    };
    // Signup controller call and logic below
    const response = await Signup(data);
    if (response === null) {
      console.log("Error while logging in - null return");
      return null;
    } 
    else if ('message' in response) {
      const response = await Login(email, password);
      if (response === null) {
        console.log("Error while logging in - null return");
        return null;
      } 
      else if ('message' in response) {
        
        if (!window.localStorage) {
          console.log("Error - Content not supported by your browser");
          return null;
        }
        localStorage.setItem('accessToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('spotifyConnected', response.spotifyConnected);
        
        setTimeout(function(){
          window.location.href = "/profile";
        },3000);
      }
    }
    return null;
  };





  const { switchToSignin } = useContext(AccountContext);

  return (
    <SignupBoxContainer>
      <FormContainer>
        <Input onChange={handleFNameInput} type="text" placeholder="First Name" />
        <Input onChange={handleLNameInput} type="text" placeholder="Last Name" />
        <Input onChange={handleEmailInput} type="email" placeholder="Email" />
        <Input onChange={handlePasswordInput} type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={handleSubmit} type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </SignupBoxContainer>
  );
}