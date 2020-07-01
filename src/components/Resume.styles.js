import styled from "@emotion/styled"
import { mq } from "../utils"

import { Button } from "./common.styles"

export const LaunchButton = styled(Button)`
  margin-left: 20px;
`

export const LaunchButtonAnchor = styled("a")`
  display: inline-flex;
  flex: 0 0 110px;

  ${mq[1]} {
    flex: auto;
  }
`

export const HideOnMobile = styled("p")`
  display: none;

  ${mq[1]} {
    display: inline;
  }
`

export const Dl = styled("dl")`
  margin-left: 20px;
`

export const Dt = styled("dt")`
  font-size: 1.4em;
`

export const Dd = styled("dd")`
  font-size: 1.2em;
  margin-left: 40px;
`
