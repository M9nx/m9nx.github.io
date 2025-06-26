import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
// TODO(cvu): Determine language settings strategy. Look at the package config.
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  /**
   * Needed to dynamically load bundled translation instead of manually
   * importing the translation files. This is not really a backend.
   */
  .use(HttpBackend)
  .init({
    backend: {
      loadPath: "/translations/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    load: "currentOnly", // load specific locales (for example `en-US`) instead of all for the language (example `en` and `en-US`).
    react: {
      useSuspense: true,
    },
  });

export default i18n;
