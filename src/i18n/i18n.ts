import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import resources from "./resources";

let browserLanguage = navigator.language;
let storedLanguage = "";

if (browserLanguage !== "ko-KR") {
  browserLanguage = "";
}

storedLanguage = localStorage.getItem("language") || "";

if (
  Object.keys(resources).findIndex((language) => language === storedLanguage) <
  0
) {
  storedLanguage = "";
}

const currentLanguage = storedLanguage || browserLanguage || "en";

i18n.use(initReactI18next).init({
  fallbackLng: currentLanguage,
  debug: false,
  resources: {
    ko: {
      lang: resources.ko,
    },
    en: {
      lang: resources.en,
    },
  },
  ns: ["lang"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
