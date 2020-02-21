import styled from "@xstyled/styled-components";
import Link from "next/link";
import React from "react";
import Logo from "../components/HomeLogo";
import { Button, Link as A } from "./Atoms";
import Container from "./layout/Container";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  a {
    font-size: 1rem;
  }
  div > * + * {
    margin-left: 24px;
  }
`;
const Background = styled.div`
  background-color: white;
  width: 100%;
`;

const Nav = (): JSX.Element => (
  <Background>
    <Container forwardedAs={Wrapper}>
      <Link href="/">
        <A>
          <Logo />
        </A>
      </Link>
      <div>
        <A href="/resume.pdf">Resume</A>
        <Link href="/blog">
          <A>Blog</A>
        </Link>
        <a href="mailto:elouartinra@gmail.com">
          <Button>Contact</Button>
        </a>
      </div>
    </Container>
  </Background>
);
export default Nav;
