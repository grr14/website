import styled from "@emotion/styled"
import { ENTERING, ENTERED, EXITED } from "react-transition-group/Transition"
import { Button } from "./common.styles"

import { getTransformFromDifference, mq, UP, LEFT, DOWN, RIGHT } from "../utils"

export const PageWrapper = styled("div")(
  ({ difference, prevDifference, status }) => {
    let transform = "translateX(0)"
    if (difference !== 0) {
      transform = `translateX(${getTransformFromDifference(difference)}%)`
    } else if (status === ENTERING) {
      transform = `translateX(${getTransformFromDifference(prevDifference)}%)`
    }
    return `
      width: 100%;
      ${mq[1]} {
        transform: ${transform};
        opacity: ${status === ENTERED ? 1 : 0};
        display: flex;
        visibility: ${status === EXITED ? "hidden" : "visible"};
        position: absolute;
        transition: 0.4s opacity ease-in-out, 0.4s transform ease-in-out;
        width: 100vw;
        height: 100%;
        align-items: center;
        justify-content: space-evenly;
      }
    `
  }
)

const GRID_GAP = 5
const BUTTON_SIZE = 50

export const ArrowButtonsContainer = styled("div")`
  display: none;
  ${mq[1]} {
    width: ${BUTTON_SIZE * 3 + GRID_GAP * 2}px;
    height: ${BUTTON_SIZE * 2 + GRID_GAP}px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: absolute;
    right: 40px;
    bottom: 40px;
    grid-gap: ${GRID_GAP}px;
  }
`

export const ArrowButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: ${({ direction }) => (direction === UP ? 1 : 2)};
  grid-column: ${({ direction }) => {
    if (direction === LEFT) {
      return 1
    } else if (direction === RIGHT) {
      return 3
    }
    return 2
  }};
`

const animation_appear_from_left = `
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInLeftBig {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(2000px, 0, 0);
  transform: translate3d(2000px, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInLeftBig {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(2000px, 0, 0);
  transform: translate3d(2000px, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
`

const animation_rotate_in = `
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes rotateIn {
  0% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotate3d(0, 0, 1, -600deg);
  transform: rotate3d(0, 0, 1, -600deg);
  opacity: 0;
  }
  100% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: none;
  transform: none;
  opacity: 1;
  }
  }
  @keyframes rotateIn {
  0% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotate3d(0, 0, 1, -600deg);
  transform: rotate3d(0, 0, 1, -600deg);
  opacity: 0;
  }
  100% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: none;
  transform: none;
  opacity: 1;
  }
`

const animation_wobble = `
-webkit-animation-name: wobble;
animation-name: wobble;
-webkit-animation-duration: 1s;
animation-duration: 1s;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
}
@-webkit-keyframes wobble {
0% {
-webkit-transform: none;
transform: none;
}
15% {
-webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
}
30% {
-webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
}
45% {
-webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
}
60% {
-webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
}
75% {
-webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
}
100% {
-webkit-transform: none;
transform: none;
}
}
@keyframes wobble {
0% {
-webkit-transform: none;
transform: none;
}
15% {
-webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
}
30% {
-webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
}
45% {
-webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
}
60% {
-webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
}
75% {
-webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
}
100% {
-webkit-transform: none;
transform: none;
}
`

const animation_lightspeed = `
-webkit-animation-name: lightSpeedIn;
animation-name: lightSpeedIn;
-webkit-animation-timing-function: ease-out;
animation-timing-function: ease-out;
-webkit-animation-duration: 1s;
animation-duration: 1s;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
}
@-webkit-keyframes lightSpeedIn {
0% {
-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
transform: translate3d(100%, 0, 0) skewX(-30deg);
opacity: 0;
}
60% {
-webkit-transform: skewX(20deg);
transform: skewX(20deg);
opacity: 1;
}
80% {
-webkit-transform: skewX(-5deg);
transform: skewX(-5deg);
opacity: 1;
}
100% {
-webkit-transform: none;
transform: none;
opacity: 1;
}
}
@keyframes lightSpeedIn {
0% {
-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
transform: translate3d(100%, 0, 0) skewX(-30deg);
opacity: 0;
}
60% {
-webkit-transform: skewX(20deg);
transform: skewX(20deg);
opacity: 1;
}
80% {
-webkit-transform: skewX(-5deg);
transform: skewX(-5deg);
opacity: 1;
}
100% {
-webkit-transform: none;
transform: none;
opacity: 1;
}
`

export const ScoreDisplay = styled("div")`
  display: none;
  ${mq[1]} {
    display: block;
    position: absolute;
    text-transform: uppercase;
    bottom: 40px;
    left: 5%;
    font-family: Iceland;
    font-size: ${({ score }) => {
      if (score < 500) {
        return "2em"
      } else if (score >= 500 && score < 1000) {
        return "2.5em"
      } else if (score >= 1000 && score < 1500) {
        return "3em"
      } else {
        return "3.5em"
      }
    }}; 

    animation:${({ score }) => {
      if (score < 500) {
        return { animation_appear_from_left }
      } else if (score >= 500 && score < 1000) {
        return { animation_wobble }
      } else if (score >= 1000 && score < 1500) {
        return { animation_rotate_in }
      } else {
        return { animation_lightspeed }
      }
    }};
  } 
`
