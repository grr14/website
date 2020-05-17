import React, { useState, useEffect, useRef } from "react"
import { Header, HeaderTitle, LanguagesBar, LanguageLabel, LanguageWrapper, LanguageItem, LanguageSpan } from "./Header.styles"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { useTranslation } from "react-i18next"

const query = graphql`
query getLanguagesData {
    dataJson(key: {eq: "languages"}) {
        pictures {
            childImageSharp {
                fixed(width: 40) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
}`

const GlobalHeader = (props) => {
    
    const data = useStaticQuery(query)
    const [visible,setVisible] = useState(false)
    const node = useRef()
    const {t} = useTranslation()

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
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
    
    return(
        <Header>
            <HeaderTitle>gregoryrabas.com</HeaderTitle>
            <LanguagesBar ref={node}>
                <LanguageLabel onClick={toggle}>
                    {t("nav:language.language")} {" "}  
                    { !visible && <i class="fas fa-caret-down"></i>}
                </LanguageLabel>
                { 
                    visible &&
                    <LanguageWrapper>
                        <LanguageItem onClick={() => props.handleLanguage("en")}>
                            <Image fixed={data.dataJson.pictures[0].childImageSharp.fixed}/><LanguageSpan>{t("nav:language.english")}</LanguageSpan>
                        </LanguageItem>
                        <LanguageItem onClick={() => props.handleLanguage("fr")}>
                            <Image fixed={data.dataJson.pictures[1].childImageSharp.fixed}/><LanguageSpan>{t("nav:language.french")}</LanguageSpan>
                        </LanguageItem>
                        <LanguageItem onClick={() => props.handleLanguage("kr")}>
                            <Image fixed={data.dataJson.pictures[2].childImageSharp.fixed}/><LanguageSpan>{t("nav:language.korean")}</LanguageSpan>
                        </LanguageItem>
                    </LanguageWrapper>
                }
            </LanguagesBar>
        </Header>
    )
}

export default GlobalHeader