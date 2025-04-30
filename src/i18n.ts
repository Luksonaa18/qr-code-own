import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import ka from "./locales/ka/translation.json";
import ru from "./locales/ru/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ka: {
      translation: ka,
    },
    ru: {
      translation: ru,
    },
  },
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
