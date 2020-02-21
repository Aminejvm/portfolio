import styled from "@xstyled/styled-components";

const HorizontalStack = styled.div`
  display: flex;
  align-items: center;
  * + * {
    margin-left: 12px;
  }
`;

export default HorizontalStack;
