import styled from "@emotion/styled"

export const SocialMediaAnchor = styled("a")`
  font-size: 60px;
  transition 0.2 linear;
  &:not(:first-child) {
    margin-left: 30px;
  }
  &::before{
    background-color:yellow;
  }
`

export const SocialMediaIcon = styled("i")`
  color: hsla(0, 0%, 0%, 0.8);
  transition: 0.4s color ease-in-out;
  &:hover {
    color: ${({ media }) => {
      if (media === "github") {
        return "#24292E"
      } else if (media === "facebook") {
        return "#1778f2"
      } else if (media === "mail") {
        return "#D93025"
      } else if (media === "linkedin") {
        return "#0077B5"
      }
    }};
    transform: scale(1.4);
  }
`
