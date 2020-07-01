import styled from "@emotion/styled"
import { mw, nsm, sh, mh, mq } from "../utils"

const mainColor = "hsla(0,0%,0%,0.8)"
const textMainColor = "white"

export const Header = styled("header")`
  display: none;

  ${nsm} {
    height: 6.5%;
    width: 100%;
    display: flex;
    background-color: ${mainColor};
    background: repeating-linear-gradient(
        45deg,
        #2b2b2b 0%,
        #2b2b2b 10%,
        #222222 0%,
        #222222 50%
      )
      0 / 15px 15px;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0 10px 0;
    font-family: Iceland;
  }
`

export const HeaderTitle = styled("h1")`
  visibility: hidden;
  ${mh} {
    font-size: 2em;
    margin-top: -15px;
  }
  ${mq[1]} {
    visibility: visible;
    color: #f0ffff;
    font-family: Iceland;
    margin-left: 20px;
    font-size: 3em;
    text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
    width: auto;
  }
`

export const LanguagesBar = styled("div")`
  ${sh} {
    display: none;
  }
  ${mw} {
    display: none;
  }
  z-index: 1;
  margin-right: 20px;
  width: 15%;
  display: flex;
  flex-direction: column;
  color: ${textMainColor};
  background: repeating-linear-gradient(
      45deg,
      #2b2b2b 0%,
      #2b2b2b 10%,
      #222222 0%,
      #222222 50%
    )
    0 / 15px 15px;
`

export const LanguageLabel = styled("span")`
  margin: 0;
  font-size: 1.6em;
  text-align: center;
  border: 1px solid ${textMainColor};
  border-radius: 25px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  &:hover {
    filter: opacity(0.9);
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
  ${mh} {
    border: none;
  }
`

export const LanguageWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`

export const LanguageItem = styled("a")`
  background: repeating-linear-gradient(
      45deg,
      #2b2b2b 0%,
      #2b2b2b 10%,
      #222222 0%,
      #222222 50%
    )
    0 / 15px 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  &:first-of-type {
  }
  &:last-child {
    padding-bottom: 5px;
  }
  &:hover {
    z-index: 2;
    filter: opacity(0.9);
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    border: 1px solid ${textMainColor};
    transition: all 0.4s ease 0s;
  }
`

export const LanguageSpan = styled("span")`
  margin: 0;
  font-size: 1.6em;
  margin-left: 10px;
  color: ${textMainColor};
`
