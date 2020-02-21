import styled, { css } from "@xstyled/styled-components";

const ProjectHeader = styled.h2Box`
  ${({ img }) => css`
    background: url(${img}) center;
  `}
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Roboto";
  background-size: contain;
  color: transparent;
`;

export default ProjectHeader;
