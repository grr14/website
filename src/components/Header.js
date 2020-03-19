import React from "react"
import { Header, HeaderTitle, LanguagesBar, Language } from "./Header.styles"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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

    return(
        <Header>
            <HeaderTitle>SITE DE GREGORY </HeaderTitle>
            <LanguagesBar>
                <Language onClick={() => props.handleLanguage("en")}>
                    <Image name="uk" fixed={data.dataJson.pictures[0].childImageSharp.fixed}/>
                </Language>
                <Language onClick={() => props.handleLanguage("fr")}>
                    <Image fixed={data.dataJson.pictures[1].childImageSharp.fixed}/>
                </Language>
                <Language onClick={() => props.handleLanguage("kr")}>
                    <Image fixed={data.dataJson.pictures[2].childImageSharp.fixed}/>
                </Language>
            </LanguagesBar>
        </Header>
    )
}

export default GlobalHeader