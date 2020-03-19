import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { Section, FlexColumnContainer, FlexSection, Title, FlexRowContainer } from "./common.styles"
import { SopraLogo } from "./Work.styles"

import { useTranslation} from "react-i18next"

const query = graphql`
  query getWorkData {
    dataJson(key: { eq: "work" }) {
      sopraLogo {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

const Work = () => {
  const { t } = useTranslation()
  const data = useStaticQuery(query)

  return (
    <Section>
      <FlexColumnContainer>
        <Title>{t("work:title")}</Title>
        <FlexRowContainer>
          <SopraLogo>
            <Image fixed={data.dataJson.sopraLogo.childImageSharp.fixed} />
          </SopraLogo>
          <FlexColumnContainer>
            <FlexSection marginTop={20}>
              <div dangerouslySetInnerHTML={{ __html: t("work:content.0") }} />
            </FlexSection>
            <FlexSection marginTop={20}>
              <div dangerouslySetInnerHTML={{ __html: t("work:content.1") }} />
            </FlexSection>
          </FlexColumnContainer>
        </FlexRowContainer>
      </FlexColumnContainer>
    </Section>
  )
}

export default Work
