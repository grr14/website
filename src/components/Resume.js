import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Section,
  FlexColumnContainer,
  FlexRowContainer,
  FlexSection,
  Title,
  SmallTitle,
  Span,
} from "./common.styles"
import { HideOnMobile, Dl, Dt, Dd } from "./Resume.styles"

import ExpandableSection from "./ExpandableSection"
import NavButtons from "./NavButtons"

import { useTranslation } from "react-i18next"

const query = graphql`
  query getResumeData {
    dataJson(key: { eq: "resume" }) {
      cv {
        title
        content {
          dt
          dd
        }
        description
        tasks
      }
      numSections
    }
  }
`

const ResumeSectionInfoTemplate = ({ cv_section, id }) => {
  const { t } = useTranslation()

  return (
    <FlexColumnContainer>
      <SmallTitle mobileJustifyContent="space-between">
        {t(`resume:section.${id}.title`)}
      </SmallTitle>
      <FlexSection marginTop={0} column={true} small={true}>
        <Dl>
          {cv_section.content.map((_, idx) => (
            <React.Fragment>
              <Dt>{t(`resume:section.${id}.subsection.${idx}.dt`)}</Dt>
              <Dd>{t(`resume:section.${id}.subsection.${idx}.dd`)}</Dd>
            </React.Fragment>
          ))}
        </Dl>
        {id == 1 && (
          <React.Fragment>
            <div
              style={{ fontSize: "1.2em" }}
              dangerouslySetInnerHTML={{
                __html: t(`resume:section.${id}.description`),
              }}
            />
            <div
              style={{ fontSize: "1.2em" }}
              dangerouslySetInnerHTML={{
                __html: t(`resume:section.${id}.tasks`),
              }}
            />
          </React.Fragment>
        )}
      </FlexSection>
    </FlexColumnContainer>
  )
}

const Resume = ({
  currentSectionIdx,
  prevSectionIdx,
  goToNextSection,
  goToPrevSection,
}) => {
  const data = useStaticQuery(query)
  const isOpened = currentSectionIdx === -1 ? true : false

  const { t } = useTranslation()

  return (
    <Section>
      <FlexRowContainer>
        <Title>{t("resume:title")}</Title>

        <NavButtons
          goToNextSection={goToNextSection}
          goToPrevSection={goToPrevSection}
          numSections={data.dataJson.numSections}
          currentSectionIdx={currentSectionIdx}
        />
      </FlexRowContainer>
      <FlexColumnContainer>
        {isOpened && (
          <HideOnMobile>
            <Span>
              <div
                dangerouslySetInnerHTML={{ __html: t("resume:description") }}
              />
            </Span>
          </HideOnMobile>
        )}
      </FlexColumnContainer>
      <ExpandableSection
        sections={data.dataJson.cv.map((cv_section, id) => (
          <ResumeSectionInfoTemplate key={id} id={id} cv_section={cv_section} />
        ))}
        currentSectionIdx={currentSectionIdx}
        prevSectionIdx={prevSectionIdx}
      />
    </Section>
  )
}

export default Resume
