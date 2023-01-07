import "../css/Login.css";
import styled from "styled-components";
import { AccountBox } from "./login/accountBox";
import img from "../assets/background.png";

const AppContainer = styled.div`
width: 100wh;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url(${img});

`;

function Login() {

  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default Login;