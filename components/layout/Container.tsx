import styled, { Box, css } from "@xstyled/styled-components";
import { breakpoints } from "@xstyled/system";

const Book = { y: "bo" } as const;

const Container = styled(Box)`
  max-width: 1280px;
  margin: 0 auto;
  ${breakpoints({
    xs: css`
      width: 90%;
    `,
    sm: css`
      width: calc(100% - 32px);
    `,
    md: css`
      width: 90%;
    `,
    lg: css`
      width: 80%;
    `,
    xl: css`
      width: 80%;
    `,
  })}
`;
export default Container;
