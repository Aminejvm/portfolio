import styled from "@xstyled/styled-components";

const VerticalStack = styled.div`
  & > * + * {
    margin-top: 120px;
  }
`;

export default VerticalStack;
