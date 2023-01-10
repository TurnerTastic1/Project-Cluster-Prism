import React from "react";
import styled from "styled-components";
import ConnectButton from "../spotify/connect/connectButton";
import Swal from "sweetalert2";

const ProfileContainer = styled.div`
  width: 100wh;
  height: 100vh;
  background: #111;
`;

const AppBar = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  background: #222;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;
const Link = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #2ecc71
  }
`;

const Info = styled.p`
  color: #fff;
`;

function Profile() {
  if (localStorage.getItem('user') === null) {
    window.location.href = "/accessdenied";
    return null;
  };

  const user = JSON.parse(localStorage.getItem('user'));
  return(
    
    <ProfileContainer>
      <AppBar>
        <Info>
            Hello {user.id} time to code
        </Info>
      </AppBar>
      <ConnectButton/>
    </ProfileContainer>
  );
}

export default Profile;