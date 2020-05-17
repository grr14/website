import React, { useState, useCallback} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Transition } from "react-transition-group"
import { ENTERING } from "react-transition-group/Transition"

import { Picture, PictureContainer, ScoreContainer, RisingPicture } from "./Intro.styles"
import { List, ListItem, Section, EqualFlexColumn, FlexSection, ResponsiveFlexSection, FlexColumnContainer, BigTitle, ButtonContainer, Button } from "./common.styles"

import ExpandableSection from "./ExpandableSection"
import NavButtons from "./NavButtons"

import { useTranslation} from "react-i18next"

const query = graphql`
  query getIntroData {
    dataJson(key: { eq: "intro" }) {
      pictures {
        id
        childImageSharp {
          fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      familiarSkills {
        skills
      }
      otherSkills {
        skills
      }
      numSections
    }
  }
`


const IntroSectionTemplate = ({ introData }) => {

  const { t } = useTranslation()

  return (  
    <FlexColumnContainer>
      <ResponsiveFlexSection marginTop={20}>
        <EqualFlexColumn>
          {t("intro:familiarSkills")}
          <List>
            {introData.familiarSkills.skills.map((skill) => (
              <ListItem key={skill}>{skill}</ListItem>
            ))}
          </List>
        </EqualFlexColumn>
        <EqualFlexColumn>
          {t("intro:otherSkills")}
          <List>
            {introData.otherSkills.skills.map((skill) => (
              <ListItem key={skill}>{skill}</ListItem>
            ))}
          </List>
        </EqualFlexColumn>
      </ResponsiveFlexSection>
      <FlexSection marginTop={20}>{t("intro:footer")}</FlexSection>
    </FlexColumnContainer>
  )

} 


const IntroWithData = ({
  data: introData,
  goToPrevSection,
  goToNextSection,
  currentSectionIdx,
  prevSectionIdx,
  isMoving,
  setIsMoving,
  setScore,
}) => {
  const [points, setPoints] = useState(0)
  const [index, setIndex] = useState(0)
  const changePicture = useCallback(() => {
    let pointsGained = 100
    setScore(prevScore => prevScore + pointsGained)
    setPoints(pointsGained)
    setTimeout(() => {
      setPoints(0)
      if(index===introData.pictures.length-1) {
        setIndex(0)
      }
      else {
        setIndex(prevIndex => prevIndex+1)
      }
    }, 2000)
  }, [isMoving, index])

  const isOpened = currentSectionIdx === 0 ? true : false  

  const { t } = useTranslation()

  return (
    <Section>
      <BigTitle>
        {t("intro:title")}
        {!!points && <ScoreContainer>+{points}</ScoreContainer>}

        <Transition appear in={!points} timeout={{ enter: 2000, exit: 0 }}>
          {(status) => {
            return (
              <PictureContainer status={status} onClick={changePicture} isOpened={isOpened}>
                {status === ENTERING ? (
                  <RisingPicture>
                    <Image
                      fixed={introData.pictures[index].childImageSharp.fixed}
                    />
                  </RisingPicture>
                ) : (
                  <Picture status={status}>
                    <Image
                      fixed={introData.pictures[index].childImageSharp.fixed}
                    />
                  </Picture>
                )}
              </PictureContainer>
            )
          }}
        </Transition>
      </BigTitle>
      <FlexSection marginTop={20} column={true}>
          {t("intro:presentation.0")}<br/>
          {t("intro:presentation.1")}
      </FlexSection>
      <ButtonContainer>
        <NavButtons
          goToNextSection={goToNextSection}
          goToPrevSection={goToPrevSection}
          numSections={introData.numSections}
          currentSectionIdx={currentSectionIdx}
          marginTop={0}
          marginRight={20}
        />
      </ButtonContainer>
      <ExpandableSection
        sections={Array(introData.numSections)
          .fill(null)
          .map((_, idx) => (
            <IntroSectionTemplate key={idx} introData={introData} />
          ))}
        currentSectionIdx={currentSectionIdx}
        prevSectionIdx={prevSectionIdx}
        setIsMoving={setIsMoving}
      />
    </Section>
  )
}


const Intro = (props) => {
  const data = useStaticQuery(query)
  return <IntroWithData {...props} data={data.dataJson} />
}

export default Intro
