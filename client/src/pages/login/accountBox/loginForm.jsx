import React, { useContext, useState, useEffect } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

function ApiFetch() {
  const [backendData, setBackendData] = useState([{}]);
  try {
    useEffect(() => {
      fetch("/api").then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data);
        }
      );
    }, []);
    return backendData.content;
  } catch (error) {
    console.log("Error while getting openinfo - " + error);
    return undefined;
  }
  
}

async function LoginUser(email, password) {
  const data = {
    "email": email,
    "password": password
  };
  return fetch('/api/auth/signin', {
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:
      JSON.stringify(data)
  }).then(
    response => {
      if (!response.ok) {
        console.log('Response not ok: '+ response.status);
      }
      
      return response.json();
    }
  ).catch(
    error => { console.log('Got Error:' + error); }
  );
}

function LoginForm(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = event => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      console.log(email + password);
      const info = await LoginUser(email, password);
      console.log(info.token);
      return null;
    } else {
      alert("Must fill in boxes");
    }
    
  };

  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" onChange={handleEmailInput} placeholder="Email" />
        <Input type="password" onChange={handlePasswordInput} placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={handleSubmit} type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

export { LoginForm };