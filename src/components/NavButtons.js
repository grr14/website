import React from "react"
import { NavButton, ButtonIcon, NavButtonContainer } from "./NavButtons.styles"

import { useTranslation} from "react-i18next"

const NavButtons = ({
  numSections,
  currentSectionIdx,
  goToNextSection,
  goToPrevSection,
  marginTop,
  marginRight,
}) => {

  const buttons = []
  const { t } = useTranslation()

  if (currentSectionIdx === -1) {
    buttons.push({ isNextButton: true, buttonText: t("button:more") })
  } 
  else {
    if (currentSectionIdx < numSections - 1) {
      buttons.push({ isNextButton: true, buttonText: t("button:next") })
    }
    if (currentSectionIdx === 0) {
      buttons.push({ isNextButton: false, buttonText: t("button:less") })
    } else {
      buttons.push({ isNextButton: false, buttonText: t("button:prev") })
    }
  }

  return (
    <NavButtonContainer marginTop={marginTop} marginRight={marginRight}>
      {buttons.map((button, idx) => (
        <NavButton
          onClick={button.isNextButton ? goToNextSection : goToPrevSection}
          key={idx}
        >
          <ButtonIcon
            isNextButton={button.isNextButton}
            className="fas fa-caret-up"
          />
          {button.buttonText}
        </NavButton>
      ))}
    </NavButtonContainer>
  )
}

export default NavButtons
