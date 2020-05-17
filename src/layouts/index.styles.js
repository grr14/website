import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mq, vmq } from "../utils/constants"

export const Main = styled("main")`
  ${mq[1]} {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
`

export const globalStyles = css`
  body {
    transition: font-size 0.420s ease-in-out;
    background-color: #F0FFFF;
    font-size: 14px;
    font-family: 'Noto Serif KR', serif;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    ${mq[1]} {
      overflow: hidden;
    }
    ${vmq[0]} {
      font-size: 0.8em;
    }
  }

  a,
  a:focus,
  a:visited,
  a:active,
  a:hover {
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  a,
  a:focus,
  a:visited {
    color: rgba(34, 92, 183, 0.8);
  }

  a:hover,
  a:active {
    color: rgba(63, 137, 229, 0.8);
  }

  img {
    margin:0;
  }

  header > div > div > .gatsby-image-wrapper { 
    border: 3px solid #333333;
    border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
    &:before {
      content: '';
      border: 2px solid #353535;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0) scale(1.420) rotate(0.5deg);
      border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
    }
    &:hover{
      -moz-box-shadow: 10px 10px 5px 0px #656565;
      -webkit-box-shadow: 10px 10px 5px 0px #656565;
      -o-box-shadow: 10px 10px 5px 0px #656565;
      box-shadow: 10px 10px 5px 0px #656565;
    }
  } 
`
/* Y I K E S  :^) */