export const BREAKPOINTS = [600, 900, 1300, 1600]

export const mq = BREAKPOINTS.map(
  bp => `@media only screen and (min-width: ${bp}px)`
)

export const VERTICAL_BREAKPOINTS = [800];

export const vmq = VERTICAL_BREAKPOINTS.map(
  bp => `@media only screen and (min-height: ${bp}px)`
)

export const hvmq = (`@media only screen and (min-height: 927px) and (min-width: 900px)`) /* or image overflow */

export const UP = 0, LEFT = 1, DOWN = 2, RIGHT = 3