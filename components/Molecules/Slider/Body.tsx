import styled from "@xstyled/styled-components";
import React from "react";
import { animated, useTransition } from "react-spring";
import { P } from "../../Atoms";
import { useSlider } from "./index";

const Heading = (): JSX.Element => {
  const {
    store: { chosen, items },
  } = useSlider();
  const CURRENT_PARAGRAPH = items[chosen].description;
  const transitions = useTransition(CURRENT_PARAGRAPH, item => item.slice(0, 8), {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: "absolute" },
  });
  return (
    <Wrapper>
      {transitions.map(({ item, key, props }) => (
        <AnimatedP key={key} style={props}>
          {item}
        </AnimatedP>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  p {
    max-width: 100%;
  }
`;

const AnimatedP = animated(P);

export default Heading;
