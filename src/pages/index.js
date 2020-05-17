import React, { useState, useCallback, useEffect } from "react"
import { Transition } from "react-transition-group"
import { useStaticQuery, graphql } from "gatsby"

import { PageWrapper, ArrowButtonsContainer, ArrowButton, ScoreDisplay } from "../components/index.styles"
import GlobalHeader from "../components/Header"
import Layout from "../layouts"
import Intro from "../components/Intro"
import About from "../components/About"
import Work from "../components/Work"
import Resume from "../components/Resume"
import Contact from "../components/Contact"

import { LEFT, DOWN, RIGHT, UP } from "../utils"

import i18n from "../i18n"

const pages = [
  { key: "intro", Component : Intro },
  { key: "work", Component : Work },
  { key: "about", Component : About },
  { key: "resume", Component : Resume },
  { key: "contact", Component : Contact }
]

const ArrowButtons = ({
  onUp,
  onDown,
  onLeft,
  onRight,
  upDisabled,
  leftDisabled,
  downDisabled,
  rightDisabled,
}) => (
  <ArrowButtonsContainer>
    <ArrowButton direction={UP} onClick={onUp} disabled={upDisabled}>
      <i className="fas fa-caret-up" />
    </ArrowButton>
    <ArrowButton direction={LEFT} onClick={onLeft} disabled={leftDisabled}>
      <i className="fas fa-caret-left" />
    </ArrowButton>
    <ArrowButton direction={DOWN} onClick={onDown} disabled={downDisabled}>
      <i className="fas fa-caret-down" />
    </ArrowButton>
    <ArrowButton direction={RIGHT} onClick={onRight} disabled={rightDisabled}>
      <i className="fas fa-caret-right" />
    </ArrowButton>
  </ArrowButtonsContainer>
)

const query = graphql`
  query {
    allDataJson {
      nodes {
        key
        numSections
      }
    }
  }
`

const InitPages = (numsSections, currentPageIdx) => {
  const [prevSections, setPrevSections] = useState(Array(numsSections.length).fill(-1))
  const [currentSections, setCurrentSections] = useState(Array(numsSections.length).fill(-1))
  const [isMoving, setIsMoving] = useState(false)

  const goToNextSection = useCallback(() => {
    setCurrentSections(originalSections => {
      const newSections = [...originalSections]
      newSections[currentPageIdx] += 1
      if (newSections[currentPageIdx] < numsSections[currentPageIdx]) {
        setPrevSections(originalSections)
        if (
          originalSections[currentPageIdx] === -1 &&
          currentPageIdx === 0 &&
          setIsMoving
        ) {
          setIsMoving(true)
        }
        return newSections
      }
      return originalSections
    })
  }, [currentPageIdx])

  const goToPrevSection = useCallback(() => {
    setCurrentSections(originalSections => {
      if (originalSections[currentPageIdx] === -1) {
        return originalSections
      }
      setPrevSections(originalSections)
      if (currentPageIdx === 0 && setIsMoving) {
        setIsMoving(true)
      }
      const newSections = [...originalSections]
      newSections[currentPageIdx] -= 1
      return newSections
    })
  }, [currentPageIdx])

  const nextSectionExists = currentSections[currentPageIdx] < numsSections[currentPageIdx] - 1
  const prevSectionExists = currentSections[currentPageIdx] > -1

  return {
    currentSections,
    prevSections,
    goToNextSection,
    goToPrevSection,
    nextSectionExists,
    prevSectionExists,
    isMoving,
    setIsMoving,
  }
}

const IndexPage = () => {
  const [currentPageIdx, setCurrentPageIdx] = useState(0)
  const [prevPageIdx, setPrevPageIdx] = useState(0)
  const [score, setScore] = useState(0)
  const data = useStaticQuery(query)
  const orderedNumSections = []
  data.allDataJson.nodes.forEach(
    ({ key, numSections }) => {
      orderedNumSections[
        pages.findIndex(pageObj => pageObj.key === key)
      ] = numSections
    }
  )
  const {
    currentSections,
    prevSections,
    goToNextSection,
    goToPrevSection,
    nextSectionExists,
    prevSectionExists,
    isMoving,
    setIsMoving,
  } = InitPages(orderedNumSections, currentPageIdx)

  const nextPageExists = currentPageIdx < pages.length - 1
  const prevPageExists = currentPageIdx > 0

  const goToPrevPage = useCallback(() => {
    setCurrentPageIdx(oldPageIdx => {
      if (oldPageIdx === 0) return oldPageIdx
      setPrevPageIdx(oldPageIdx)
      return oldPageIdx - 1
    })
  }, [])

  const goToNextPage = useCallback(() => {
    setCurrentPageIdx(oldPageIdx => {
      if (oldPageIdx === pages.length - 1) return oldPageIdx
      setPrevPageIdx(oldPageIdx)
      return oldPageIdx + 1
    })
  }, [])

  useEffect(() => {
    function onKeyDown(e) {
      switch (e.key) {
        case "Up": 
        case "ArrowUp":
          goToNextSection()
          break
        case "Left":
        case "ArrowLeft":
          goToPrevPage()
          break
        case "Down":
        case "ArrowDown":
          goToPrevSection()
          break
        case "Right":
        case "ArrowRight":
          goToNextPage()
          break
      }
    }
    if (document) {
      document.addEventListener("keydown", onKeyDown)
    }
    return () => document && document.removeEventListener("keydown", onKeyDown)
  }, [currentPageIdx])
  
  const handleLanguage = (language) => {
    switch(language){
      case "en":
        i18n.changeLanguage("en")
        break
      case "fr":
        i18n.changeLanguage("fr")
        break
      case "kr":
        i18n.changeLanguage("kr")
        break
      default:
        i18n.changeLanguage("en")
    }
  }

  return (
    <Layout>
      <GlobalHeader handleLanguage={handleLanguage}/>
      {pages.map((pageObj, idx) => (
        <Transition
          in={idx === currentPageIdx}
          timeout={{ enter: 0, exit: 400 }}
          key={idx}
        >
          {(status) => (
            <PageWrapper
              difference={idx - currentPageIdx}
              prevDifference={idx - prevPageIdx}
              status={status}
            >
              {
                <pageObj.Component
                  currentSectionIdx={currentSections[idx]}
                  prevSectionIdx={prevSections[idx]}
                  goToNextSection={goToNextSection}
                  goToPrevSection={goToPrevSection}
                  isMoving={isMoving}
                  setIsMoving={setIsMoving}
                  setScore={setScore}
                />
              }
            </PageWrapper>
          )}
        </Transition>
      ))}
      <ArrowButtons
        onUp={goToNextSection}
        onLeft={goToPrevPage}
        onDown={goToPrevSection}
        onRight={goToNextPage}
        upDisabled={!nextSectionExists}
        leftDisabled={!prevPageExists}
        downDisabled={!prevSectionExists}
        rightDisabled={!nextPageExists}
      />
      { score > 0 && <ScoreDisplay score={score}>Score: {score}</ScoreDisplay>}
  
    </Layout>
  )
}

export default IndexPage
