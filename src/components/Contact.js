import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Section,
  FlexColumnContainer,
  FlexSection,
  Title,
} from "./common.styles"
import { SocialMediaAnchor, SocialMediaIcon } from "./Contact.styles"
import { useTranslation } from "react-i18next"

const query = graphql`
  query getContactData {
    dataJson(key: { eq: "contact" }) {
      linkedIn
      gitHub
      facebook
      email
      footer
    }
  }
`

const Contact = () => {
  const data = useStaticQuery(query)
  const { t } = useTranslation()

  return (
    <Section mobilePaddingBottom={80}>
      <FlexColumnContainer>
        <Title>{t("contact:title")}</Title>
        <FlexSection marginTop={30} column={true}>
          {t("contact:content")}
        </FlexSection>
        <FlexSection marginTop={30}>
          <SocialMediaAnchor href={data.dataJson.linkedIn} target="_blank">
            <SocialMediaIcon className="fab fa-linkedin" media="linkedin" />
          </SocialMediaAnchor>
          <SocialMediaAnchor href={data.dataJson.gitHub} target="_blank">
            <SocialMediaIcon className="fab fa-github" media="github" />
          </SocialMediaAnchor>
          <SocialMediaAnchor href={data.dataJson.facebook} target="_blank">
            <SocialMediaIcon className="fab fa-facebook" media="facebook" />
          </SocialMediaAnchor>
          <SocialMediaAnchor href={data.dataJson.email} target="_blank">
            <SocialMediaIcon className="fas fa-envelope" media="mail" />
          </SocialMediaAnchor>
        </FlexSection>
      </FlexColumnContainer>
    </Section>
  )
}

export default Contact
