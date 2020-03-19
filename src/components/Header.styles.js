import styled from "@emotion/styled"

export const Header = styled("header")`
    width: "100%";
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0 10px 0;
`

export const HeaderTitle = styled("h1")`
    color: white;
    margin: 0;
`

export const LanguagesBar = styled("div")`
    display: flex;
    flex-direction: row;
    background-color: inherit;
`

export const Language = styled("a")`
    background-color:inherit;
    &:not(:first-child) {
        margin-left: 15px;
      }
    &:last-child {
        margin-right:15px;
    }
`