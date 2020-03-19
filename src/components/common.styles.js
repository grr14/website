import styled from "@emotion/styled"
import { vmq, mq } from "../utils/constants"

export const Section = styled("section")`
  display: flex;
  padding: 20px 20px
    ${ ({ mobilePaddingBottom }) =>
      mobilePaddingBottom ? mobilePaddingBottom : 60 }px
    20px;
  flex-direction: column;

  ${ mq[1] } {
    width: 1000px;
    padding: 20px;
    margin-top : -100px;
  }
`

export const ButtonContainer = styled("div")`
  margin-top: 20px;
  display: flex;
`

export const Button = styled("button")`
  background: rgb(0, 0, 0, 0.8);
  border-radius: 3px;
  color: white;
  font-family: "brandon-grotesque", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  outline-color: #aaa;
  font-size: 14.4px;
  padding: 12px;
  border: 0px;
  transition: 0.2s background ease-in-out;

  &:active {
    background: rgb(0, 0, 0, 0.9);
  }

  &:disabled {
    background: rgb(0, 0, 0, 0.2);
    cursor: not-allowed;
  }
`

export const EqualFlexColumn = styled("div")`
  flex: 1 1 0;
  &:not(:first-of-type) {
    margin-top: 20px;
    ${ mq[1] } {
      margin-top: 0;
      margin-left: 20px;
    }
  }
`

export const FlexRowContainer = styled("div")`
  display: flex;
  flex-direction :row;
  justify-content:space-between;
`

export const FlexColumnContainer = styled(FlexRowContainer)`
  display: flex;
  flex-direction: column;
`

export const FlexSection = styled("div")`
  margin-top: ${(props) => props.marginTop / 2}px;
  ${ vmq[0] } {
    margin-top: ${ (props) => props.marginTop }px;
  }
  font-size: ${ (props) => (props.small ? "1.2em" : "1.6em") };
  display: flex;
  flex-direction: ${ ({ column }) =>
    column ? "column" : "row" };
`

export const ResponsiveFlexSection = styled(FlexSection)`
  flex-direction: column;
  ${ mq[1] } {
    flex-direction: row;
  }
`

export const Title = styled("header")`
  font-family: "brandon-grotesque", sans-serif;
  text-transform: uppercase;
  font-size: 2.8em;
  font-weight: 700;
  display: flex;
  justify-content: ${ ({ mobileJustifyContent }) =>
    mobileJustifyContent || "flex-start" };
  align-items: center;
  margin-top: ${(props) => props.marginTop || 0 }px;

  ${ mq[1] } {
    font-size: 3.6em;
    justify-content: flex-start;
  }
`

export const BigTitle = styled(Title)`
  font-size: 3.4em;
  ${ mq[1] } {
    font-size: 4.8em;
  }
`

export const SmallTitle = styled(Title)`
  font-size: 2em;

  ${ mq[1] } {
    font-size: 2.4em;
  }
`

export const List = styled("ul")`
  margin-top: 10px;
  margin-bottom: 0;
  margin-left : 40px;
`

export const ListItem = styled("li")`
  margin-bottom: 0;
  font-size: 1em;
`

export const Span = styled("span")`
  margin: 0;
  font-size: 1.6em;
`