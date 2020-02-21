import styled from "@xstyled/styled-components";
import React from "react";
import { animated, config, useTransition } from "react-spring";
import { ProjectHeading } from "../../Atoms";
import { useSlider } from "./index";
const Heading = (): JSX.Element => {
  const {
    store: { chosen, items },
  } = useSlider();
  const CURRENT_TITLE = items[chosen].heading;
  const CURRENT_IMG = items[chosen].img;
  const transitions = useTransition(CURRENT_TITLE, item => item, {
    from: { transform: "translateX(0%)" },
    enter: { transform: "translateX(-100%)" },
    leave: { transform: "translateX(3-100%)" },
    config: config.slow,
  });
  return (
    <Wrapper>
      {transitions.map(({ item, key, props }) => (
        <>
          <AnimatedBlack key={key} style={props} />
          <ProjectHeading fontSize={{ xs: "2rem", md: "3.25rem" }} img={CURRENT_IMG}>
            {item}
          </ProjectHeading>
        </>
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

const AnimatedBlack = styled(animated.div)`
  background-color: #000;
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0%;
  left: 0%;
`;

export default Heading;
