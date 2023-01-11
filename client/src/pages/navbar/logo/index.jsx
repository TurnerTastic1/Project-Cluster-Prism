import React from "react";

import styled from "styled-components";
import logo from "../../../assets/temp_one.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;
  

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.a`
  text-decoration: none;
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #fff;
  font-weight: 500;

  &:hover {
    color: #2ecc71;
  }
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={logo} alt="logo" />
      </LogoImg>
      <LogoText href="/">Project Cluster-Prism</LogoText>
    </LogoWrapper>
  );
}