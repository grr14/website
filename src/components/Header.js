import React, { useState, useEffect, useRef } from "react"
import {
  Header,
  HeaderTitle,
  LanguagesBar,
  LanguageLabel,
  LanguageWrapper,
  LanguageItem,
  LanguageSpan,
} from "./Header.styles"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { useTranslation } from "react-i18next"
import { BREAKPOINTS } from "../utils"

const query = graphql`
  query getLanguagesData {
    dataJson(key: { eq: "languages" }) {
      pictures {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

const GlobalHeader = props => {
  const data = useStaticQuery(query)
  const [visible, setVisible] = useState(false)
  const node = useRef()
  const { t } = useTranslation()
  const windowSize = useWindowSize()

  const handleClick = e => {
    if (node?.current?.contains(e.target)) {
      setVisible(true)
      return
    }
    setVisible(false)
  }

  useEffect(() => {
    document.addEventListener("mouseover", handleClick)
    return () => {
      document.removeEventListener("mouseover", handleClick)
    }
  }, [])

  const toggle = () => {
    setVisible(!visible)
  }

  return windowSize.width < BREAKPOINTS[1] ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        margin: "5px 5px 0 0",
      }}
    >
      <LanguageItem mobile onClick={() => props.handleLanguage("en")}>
        <Image
          style={{ marginRight: "5px" }}
          fixed={data.dataJson.pictures[0].childImageSharp.fixed}
        />
      </LanguageItem>
      <LanguageItem mobile onClick={() => props.handleLanguage("fr")}>
        <Image
          style={{ marginRight: "5px" }}
          fixed={data.dataJson.pictures[1].childImageSharp.fixed}
        />
      </LanguageItem>
      <LanguageItem mobile onClick={() => props.handleLanguage("kr")}>
        <Image fixed={data.dataJson.pictures[2].childImageSharp.fixed} />
      </LanguageItem>
    </div>
  ) : (
    <Header>
      <React.Fragment>
        <HeaderTitle>gregoryrabas.com</HeaderTitle>
        <LanguagesBar ref={node}>
          <LanguageLabel onClick={toggle}>
            {t("nav:language.language")}{" "}
            <i class="fas fa-caret-down" style={{ marginLeft: "10px" }} />
          </LanguageLabel>
          {visible && (
            <LanguageWrapper>
              <LanguageItem onClick={() => props.handleLanguage("en")}>
                <Image
                  fixed={data.dataJson.pictures[0].childImageSharp.fixed}
                />
                <LanguageSpan>{t("nav:language.english")}</LanguageSpan>
              </LanguageItem>
              <LanguageItem onClick={() => props.handleLanguage("fr")}>
                <Image
                  fixed={data.dataJson.pictures[1].childImageSharp.fixed}
                />
                <LanguageSpan>{t("nav:language.french")}</LanguageSpan>
              </LanguageItem>
              <LanguageItem onClick={() => props.handleLanguage("kr")}>
                <Image
                  fixed={data.dataJson.pictures[2].childImageSharp.fixed}
                />
                <LanguageSpan>{t("nav:language.korean")}</LanguageSpan>
              </LanguageItem>
            </LanguageWrapper>
          )}
        </LanguagesBar>
      </React.Fragment>
    </Header>
  )
}

export default GlobalHeader
