import styled from "@emotion/styled"
import { mh } from "../utils"

const mainColor = "hsla(0,0%,0%,0.8)"
const textMainColor = "white"

export const Header = styled("header")`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 10px 0;
  font-family: Iceland;
`

export const HeaderTitle = styled("h1")`
  margin: 0 0 0 20px;
  visibility: visible;
  color: #eaeaea;
  font-family: Iceland;
  font-size: 3em;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  width: auto;
`

export const LanguagesBar = styled("div")`
  z-index: 1;
  margin-left: 20px;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-right: 0;
  font-size: 1.6em;
  text-align: center;
  border: 1px solid ${textMainColor};
  border-radius: 25px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  max-width: 160px;
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
  position: absolute;
  top: 50px;
  padding: 10px;
  width: 160px;
`

const background = `repeating-linear-gradient(45deg, #2b2b2b 0%, #2b2b2b 10%, #222222 0%, #222222 50%) 0 / 15px 15px;`

export const LanguageItem = styled("a")`
  z-index: 1;
  background: ${props => (props.mobile ? "none" : background)};
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
