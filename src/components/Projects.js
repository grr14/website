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
import { HideOnMobile } from "./common.styles"

import ExpandableSection from "./ExpandableSection"
import NavButtons from "./NavButtons"

import { useTranslation } from "react-i18next"

const query = graphql`
  query getProjectsData {
    dataJson(key: { eq: "projects" }) {
      projects {
        title
        description
      }
      numSections
    }
  }
`
const ProjectsSectionInfoTemplate = ({ _, id }) => {
  const { t } = useTranslation()

  return (
    <FlexColumnContainer>
      <SmallTitle mobileJustifyContent="space-between">
        {t(`projects:section.${id}.title`)}
      </SmallTitle>
      <FlexSection marginTop={0} column={true} small={true}>
        <p
          style={{ fontSize: "1.2em" }}
          dangerouslySetInnerHTML={{
            __html: t(`projects:section.${id}.content`),
          }}
        />
      </FlexSection>
    </FlexColumnContainer>
  )
}

const Projects = ({
  currentSectionIdx,
  prevSectionIdx,
  goToNextSection,
  goToPrevSection,
}) => {
  const data = useStaticQuery(query)
  const isOpened = currentSectionIdx === -1

  const { t } = useTranslation()

  return (
    <Section>
      <FlexRowContainer>
        <Title>{t("projects:title")}</Title>

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
                dangerouslySetInnerHTML={{ __html: t("projects:description") }}
              />
            </Span>
          </HideOnMobile>
        )}
      </FlexColumnContainer>
      <ExpandableSection
        sections={data.dataJson.projects.map((_, id) => (
          <ProjectsSectionInfoTemplate key={id} id={id} />
        ))}
        currentSectionIdx={currentSectionIdx}
        prevSectionIdx={prevSectionIdx}
      />
    </Section>
  )
}

export default Projects
