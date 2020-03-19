import styled from "@emotion/styled"

import { mq } from "../utils"

export const SopraLogo = styled("div")`
  display: none;
  border:none;
  ${mq[1]} {
    display: flex;
    align-items: center;
    margin-right: 20px;
    flex: 0 0 120px;
  }
`
