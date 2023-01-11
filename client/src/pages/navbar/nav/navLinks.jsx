import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
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
  text-decoration: none;
  color: inherit;
  font-size: inherit;

  &:hover {
    color: #2ecc71;
  }
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/profile">Profile</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/gencluster">Generate Clusters</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/pagenotfound">How it works</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/pagenotfound">About us</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}