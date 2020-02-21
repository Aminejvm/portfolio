import React from "react";
import Container from "../../layout/Container";
import Body from "./Body";
import Controls from "./Controls";
import Heading from "./Heading";
import Indicator from "./Indicator";

type Project = {
  heading: string;
  description: string;
  img: string;
};

type SliderState = {
  items: Project[];
  chosen: number;
};

interface ContextInterface {
  store: SliderState;
  handleNext: () => void;
  handlePrevious: () => void;
}

// Context
const SliderContext = React.createContext({} as ContextInterface);

// Consumer
export const useSlider = () => {
  const context = React.useContext(SliderContext);
  if (!context) {
    throw new Error("This component must be a child of the Slider Context");
  }
  return context;
};

// Reducer used to display the current product in view
const sliderReducer = (state: SliderState, action): SliderState => {
  switch (action.type) {
    case "SET_NEXT_SLIDE":
      return { ...state, chosen: Math.abs((state.chosen + 1) % state.items.length) };
    case "SET_PREVIOUS_SLIDE":
      return { ...state, chosen: Math.abs((state.chosen - 1) % state.items.length) };
    default:
      return state;
  }
};
type SliderProps = {
  projects: Project[];
  children: any;
};
const Slider = ({ projects, children }: SliderProps): JSX.Element => {
  const [store, dispatch] = React.useReducer(sliderReducer, { chosen: 0, items: projects });
  const handleNext = React.useCallback(() => dispatch({ type: "SET_NEXT_SLIDE" }), [store]);
  const handlePrevious = React.useCallback(() => dispatch({ type: "SET_PREVIOUS_SLIDE" }), [store]);
  const value = React.useMemo(() => ({ store, handleNext, handlePrevious }), [store]);
  return (
    <SliderContext.Provider value={value}>
      <Container>{children}</Container>
    </SliderContext.Provider>
  );
};

Slider.Body = Body;
Slider.Heading = Heading;
Slider.Controls = Controls;
Slider.Indicator = Indicator;
export default Slider;
