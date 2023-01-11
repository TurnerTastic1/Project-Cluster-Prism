import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const LogoutButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;

  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #2ecc71;
    background-color: #111;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;

  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #2ecc71;
    background-color: #111;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;

  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #2ecc71;
    background-color: #111;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function Accessibility(props) {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("spotifyConnected");
    window.location.href = "/";
    return null;
  };


  let loggedIn = true;
  if (localStorage.getItem('user') === null) {
    loggedIn = false;
  };
  return (
    <AccessibilityContainer>
      { !loggedIn && 
      <LoginButton>
        <Link href="/login">Login</Link>
      </LoginButton> }
      { !loggedIn &&
      <RegisterButton>
        <Link href="/login">Register</Link>
      </RegisterButton> }
      { loggedIn && 
      <LogoutButton>
        <Link onClick={handleLogout}>Logout</Link>
      </LogoutButton>
      }
    </AccessibilityContainer>
  );
}