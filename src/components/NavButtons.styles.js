import styled from "@emotion/styled"
import { mq } from "../utils/constants"
import { Button } from "./common.styles"

export const NavButton = styled(Button)`
  :not(:first-of-type) {
    margin-left: 15px;
  }
  padding: 12px;
`

export const ButtonIcon = styled("i")`
  margin-right: 10px;
  transform: ${({ isNextButton }) =>
    isNextButton ? "none" : "rotate(180deg)"};
  transition: 0.18s transform ease-in-out;
`


export const NavButtonContainer = styled("div")`
  margin-top: ${({ marginTop }) =>
    marginTop == null ? 20 : marginTop}px;
  margin-right: ${({ marginRight }) =>
    marginRight == null ? 0 : marginRight}px;
  align-self: auto;
  display: none;

  ${mq[1]} {
    display: block;
  }
`
