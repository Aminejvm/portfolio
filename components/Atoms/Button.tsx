import styled from "@xstyled/styled-components";

const Button = styled.buttonBox`
  background-color: primary500;
  color: white;
  box-shadow: 1;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.4s;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  &:hover {
    transform: translateY(-2px);
    background-color: primary400;
    box-shadow: 2;
  }
`;

export default Button;
