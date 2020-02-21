import styled from "@xstyled/styled-components";
import React from "react";
import { P } from "../../Atoms";
import { useSlider } from "./index";
const Indicator = (): JSX.Element => {
  const {
    store: { chosen, items },
  } = useSlider();
  return (
    <Wrapper>
      <P fontWeight={700} color="grey">{`0${chosen + 1}`}</P>
      <Line />
      <P fontWeight={700} color="grey">{`0${items.length}`}</P>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 8px;
  }
`;

const Line = styled.div`
  width: 100%;
  background-color: grey;
  height: 2px;
`;

export default Indicator;
