export const BREAKPOINTS = [600, 900, 1300, 1600]

export const mq = BREAKPOINTS.map(
  bp => `@media only screen and (min-width: ${bp}px)`
)

export const VERTICAL_BREAKPOINTS = [800];

export const vmq = VERTICAL_BREAKPOINTS.map(
  bp => `@media only screen and (min-height: ${bp}px)`
)

export const mw = (`@media only screen and (max-width:850px)` )

export const nsm = (`@media only screen and (min-width: 900px) and (min-height:700px)`)

export const mh = (`@media only screen and (max-height:800px) and (min-height:700px)` )

export const sh = (`@media only screen and (max-height:699px)` )

export const hvmq = (`@media only screen and (min-height: 520px) and (min-width:500px) `) /* or image overflow */

export const UP = 0, LEFT = 1, DOWN = 2, RIGHT = 3