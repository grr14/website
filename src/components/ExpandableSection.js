import React, { useRef, useEffect } from "react"
import { Transition } from "react-transition-group"

import { ExpandableSectionWrapper, ScrollingSection } from "./ExpandableSection.styles"

const ExpandableSection = ({
  sections,
  currentSectionIdx,
  prevSectionIdx,
  setIsMoving,
}) => {
  const expandableSectionWrapper = useRef(null)
  useEffect(() => {
    if (!setIsMoving) {
      return
    }
    const stopMoving = () => {
      setIsMoving(false)
    }

    expandableSectionWrapper.current.addEventListener(
      "transitionend",
      stopMoving
    )

    return () => {
      expandableSectionWrapper.current.removeEventListener(
        "transitionend",
        stopMoving
      )
    }
  }, [])
  return (
    <ExpandableSectionWrapper
      currentSectionIdx={currentSectionIdx}
      ref={expandableSectionWrapper}
    >
      {sections.map((section, idx) => (
        <Transition
          in={idx === currentSectionIdx}
          timeout={{ enter: 0, exit: 400 }}
          key={idx}
        >
          {(status) => (
            <ScrollingSection
              difference={idx - currentSectionIdx}
              prevDifference={idx - prevSectionIdx}
              status={status}
            >
              {section}
            </ScrollingSection>
          )}
        </Transition>
      ))}
    </ExpandableSectionWrapper>
  )
}

export default ExpandableSection
