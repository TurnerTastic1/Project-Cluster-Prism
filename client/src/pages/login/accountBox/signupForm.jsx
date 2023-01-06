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
  const [confirmPassword, setConfPassword] = useState("");

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

  const handleConfPasswordInput = event => {
    setConfPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
        background: 'black'
      });
      return null;
    }
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

      Swal.fire({
        title: 'Welcome! Do you want to login?',
        showDenyButton: true,
        showCancelButton: false,
        background: 'black',
        confirmButtonText: 'Login',
        denyButtonText: `Don't Login`,
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Logging you in!',
            background: 'black',
            showConfirmButton: false,
          });
          // Logging user in based on signup data
          // Logic below is similar to that of loginForm.jsx
          const response = await Login(data.email, data.password);
          if (response === null) {
            Swal.fire("Oops", "External server error, taking you to safety", "error");
            setTimeout(function(){
              window.location.href = "/";
            },2000);
          } 
          else if ('message' in response) {
      
            if (!window.localStorage) {
              console.log("Error - localstorage not supported by your browser");
              return null;
            }
            localStorage.setItem('accessToken', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            
            setTimeout(function(){
              window.location.href = "/";
            },3000);
            
            return null;
          }
          // Does not want to login logic

        } else if (result.isDenied) {
          Swal.fire({
            icon: 'success',
            title: 'Sending you somewhere...',
            background: 'black',
            showConfirmButton: false,
          });
          setTimeout(function(){
            window.location.href = "/";
          },2000);
        }
      });
      return null;
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
        <Input onChange={handleConfPasswordInput} type="password" placeholder="Confirm Password" />
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