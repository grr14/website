import React from "react"
import Helmet from "react-helmet"
import { Global } from "@emotion/core"
import { Main, globalStyles } from "./index.styles"

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Gregory RABAS"
      link={[
        { rel: "stylesheet", href: "https://use.typekit.net/mdx0cer.css" },
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.12.1/css/all.css",
          integrity:
            "sha384-v8BU367qNbs/aIZIxuivaU55N5GPF89WBerHoGA4QTcbUjYiLQtKdrfXnqAcXyTv",
          crossOrigin: "anonymous",
        },
        {
          rel:"stylesheet", type:"text/css", href:"//fonts.googleapis.com/css?family=Iceland"
        },
        {rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Noto+Serif+KR&display=swap"}
      ]}
    />
    <Global styles={globalStyles} />
    <Main>{children}</Main>
  </>
)

export default Layout
