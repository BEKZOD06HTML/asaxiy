import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzTranslations from "./locales/uz.json";
import ruTranslations from "./locales/ru.json";

const resources = {
    uz: {translation: uzTranslations},
    ru: {translation: ruTranslations}
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "uz",
        lng: "uz",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
