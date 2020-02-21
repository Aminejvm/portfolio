import styled from "@xstyled/styled-components";
import React from "react";
import { Icon } from "../../Atoms";
import { useSlider } from "./index";

const Controls = (): JSX.Element => {
  const { handleNext, handlePrevious } = useSlider();
  return (
    <Wrapper>
      <IconButton onClick={handlePrevious}>
        <Icon icon="symbolLeft" />
      </IconButton>
      <IconButton onClick={handleNext}>
        <Icon icon="symbolRight" />
      </IconButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  background-color: grey100;
  transition: all 0.4s;
  border-radius: 50%;
  &:hover {
    background-color: grey200;
  }
`;

export default Controls;
