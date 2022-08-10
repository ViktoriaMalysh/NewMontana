import { slideInDown } from "react-animations";
import Radium from "radium";

export const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInDown, "bounce"),
  },
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInDown, "fadeIn"),
  },
  fadeInDown3s: {
    animation: "x 3s",
    animationName: Radium.keyframes(slideInDown, "fadeInDown"),
  },
  fadeInDown2s: {
    animation: "x 2s",
    animationName: Radium.keyframes(slideInDown, "fadeInDown"),
  },
};
