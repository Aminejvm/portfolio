import styled from "@xstyled/styled-components";

const Link = styled.a`
  font-size: 0.875rem;
  font-family: "Roboto";
  font-weight: bold;
  color: grey900;
  margin-left: 16px;
  transition: all 0.4s;
  &:hover {
    color: grey;
    cursor: pointer;
  }

  position: relative;
  &::after {
    width: 0%;
    transition: all 0.4s;
    content: "";
    height: 2px;
    position: absolute;
    background-color: indigo600;
    bottom: -16px;
    left: 0%;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default Link;
