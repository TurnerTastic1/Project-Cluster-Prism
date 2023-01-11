import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100wh;
  height: 100vh;
  background: #111;
`;

const Header1Item = styled.h1`
    height: 10vh;
    padding: 0 1.1em;
    color: #fff;
    font-weight: 500;
    
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;
`;

const Header3Item = styled.h5`
    height: 20vh;
    padding: 0 1.1em;
    color: #fff;
    font-weight: 500;
    
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;
`;

const LinkItem = styled.li`
  height: 0vh;
  padding: 0 1.1em;
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  
  transition: all 220ms ease-in-out;

`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #2ecc71
  }
`;

function Profile() {

  return(
    
    <PageContainer>
      <Header1Item>
        Access Denied
      </Header1Item>
      <Header3Item>
        <Link href="/login">
          Sign in 
        </Link>
      </Header3Item>
      <LinkItem>
        <Link href="/">
          Home
        </Link>
      </LinkItem>
    </PageContainer>
  );
}

export default Profile;