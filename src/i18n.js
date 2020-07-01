import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "../data/locales/appEN.en.json"
import fr from "../data/locales/appFR.fr.json"
import kr from "../data/locales/appKR.kr.json"

i18n
  // learn more: https://github.com/i18next/i18next-xhr-backend
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    whitelist: ["en", "fr", "kr"],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en,
      fr,
      kr,
    },
    ns: ["nav", "intro", "work", "contact", "resume", "about", "button"],
  })
export default i18n
