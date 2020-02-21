import styled from "@xstyled/styled-components";
import React from "react";

type Props = {
  space: number;
  recursive: boolean;
  splitAt: number;
  children: React.ReactNode;
  minWidth?: string;
  alignItems?: string;
};

const Stack = ({ children, ...props }: Props) => <Wrapper {...props}>{children}</Wrapper>;

const Wrapper = styled.divBox`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  & > * + * {
    margin-top: ${({ space }) => space}rem;
  }
  ${({ recursive, space }) =>
    recursive &&
    ` & * + * {
      margin-top:${space}rem;}
  `}
  ${({ splitAt }) =>
    splitAt > 0 &&
    ` & > :nth-child(${splitAt}) {
      margin-top:auto;}
  `}
`;

Stack.defaultProps = {
  // Here goes your props default values
  space: 1,
  recursive: false,
  splitAt: 0,
};
export default Stack;
