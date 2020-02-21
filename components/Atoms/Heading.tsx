import styled from "@xstyled/styled-components";

const h1 = styled.h1Box`
  font-size: 1.5rem;
  font-family: "Roboto";
  line-height: 1.2;
  color: grey;
`;

const Heading = h1;

Heading.h1 = h1;

export default Heading;
