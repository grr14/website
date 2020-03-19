import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Section,
  FlexColumnContainer,
  FlexSection,
  ResponsiveFlexSection,
  Title,
  List,
  ListItem,
} from "./common.styles"

import { useTranslation } from "react-i18next"

const query = graphql`
  query getAboutData {
    dataJson(key: { eq: "about" }) {
      numSections
    }
  }
`
const About = () => {
  const data = useStaticQuery(query)
  const { t } = useTranslation()

  return (
    <Section>
      <FlexColumnContainer>
        <Title>{t("about:title")}</Title>
        <FlexSection marginTop={20}>
          <div dangerouslySetInnerHTML={{ __html: t("about:content.0") }} />
        </FlexSection>
        <FlexSection marginTop={20}>
          <div dangerouslySetInnerHTML={{ __html: t("about:content.1") }} />
        </FlexSection>
        <FlexSection marginTop={20}>
          <div dangerouslySetInnerHTML={{ __html: t("about:content.2") }} />
        </FlexSection>
      </FlexColumnContainer>
      <ResponsiveFlexSection>
        <List>
          <ListItem>React JS</ListItem>
          <ListItem>React Transition</ListItem>
          <ListItem>Gatsby Framework</ListItem>
          <ListItem>Emotion CSS in JS</ListItem>
          <ListItem>react i18next</ListItem>
        </List>
      </ResponsiveFlexSection>
      
    </Section>
  )
}

export default About
