import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { EXITED, EXITING } from "react-transition-group/Transition"

import { hvmq } from "../utils/constants"

const rise = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
`

const scoreAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  10%, 80% {
    transform: none;
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const shake = keyframes`
0.50%, 90% {
  -webkit-transform: translate3d(-0.75px, 0, 0) rotate(3deg);
          transform: translate3d(-0.75px, 0, 0) rotate(3deg);
}

0.50%, 80% {
  -webkit-transform: translate3d(0.75px, 0, 0) rotate(-3deg);
          transform: translate3d(0.75px, 0, 0) rotate(-3deg);
}

30%, 50%, 70% {
  -webkit-transform: translate3d(-0.75px, 0, 0) rotate(3deg);
          transform: translate3d(-0.75px, 0, 0) rotate(3deg);
}

0.50%, 60% {
  -webkit-transform: translate3d(0.75px, 0, 0) rotate(-3deg);
          transform: translate3d(0.75px, 0, 0) rotate(-3deg);
}
`

const Container = styled("div")`
  max-width: 600px;
  max-height: 300px;
  flex: 0 0 80px;
  margin-left: 40px;
`

export const PictureContainer = styled(Container)`
  display:none;
  ${hvmq}{  
      overflow: visible;
      ${({ status, isOpened }) =>
        `display: ${
          status === EXITED || status === EXITING || isOpened === true
            ? "none"
            : "block"
        };`}

      &:hover {
        -webkit-animation: ${shake} 0.32s cubic-bezier(.36, .07, .19, .97) infinite;
  }

`

export const Picture = styled("div")(
  ({ status }) => `
    display: ${status === EXITED || status === EXITING ? "none" : "block"};
    cursor:pointer;
  `
)

export const RisingPicture = styled("div")`
  cursor: pointer;
  animation: ${rise} 2s ease-in-out forwards;
`

export const ScoreContainer = styled(Container)`
  font-size: 0.4em;
  font-family: ocr-a-std, monospace;
  animation: ${scoreAnimation} 3s ease-in-out forwards;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
