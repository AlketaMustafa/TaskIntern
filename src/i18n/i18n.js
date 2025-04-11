import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            title: "Rick and Morty Characters",
            loading: "Loading characters...",
            error: "Error",
            noCharacters: "No characters found",
            status: "Status",
            species: "Species",
            gender: "Gender",
            origin: "Origin",
            english: "English",
            german: "German",
            
        }
    },
    de: {
        translation: {
            title: "Rick und Morty Figuren",
            loading: "Lade charaktere...",
            error: "Fehler",
            noCharacters: "Keine charaktere gefunden",
            status: "Status",
            species: "Spezies",
            gender: "Geschlecht",
            origin: "Herkunft",
            english: "Englisch",
            german: "Deustch",

        }
    }
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});
    export  const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

export default i18n;