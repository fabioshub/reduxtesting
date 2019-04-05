import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    "search": "Search",
                    "loading": 'Loading items...'
                }
            },
            nl: {
                translation: {
                    "search": "Zoeken",
                    "loading": 'Producten laden...'
                }
            },
            de: {
                translation: {
                    "search": "Suchen",
                    "loading": 'Produkte laden...'
                }
            },
            fa: {
                translation: {
                    "search": "Recherche",
                    "loading": 'Charger des produits...'
                }
            },
            'en-GB': {
                translation: {
                    "search": "Search",
                    "loading": 'Loading items...'
                }
            },
            'en-US': {
                translation: {
                    "search": "Search",
                    "loading": 'Loading items...'
                }
            },
            'nl-NL': {
                translation: {
                    "search": "Zoeken",
                    "loading": 'Producten laden...'
                }
            },
            'de-DE': {
                translation: {
                    "search": "Suchen",
                    "loading": 'Produkte laden...'
                }
            },
            'fa-FA': {
                translation: {
                    "search": "Recherche",
                    "loading": 'Charger des produits...'
                }
            },
        },
        lng: navigator.language,
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    }, () => { console.log(navigator.language) });


const languageMap = {
    'nl-NL': 'NLD',
    'nl': 'NLD',
    'en-US': 'ENU',
    'en-GB': 'ENU',
    'en': 'ENU',
    'de': 'DEU',
    'de-DE': 'DEU',
    'fr': 'FRA',
    'fr-FR': 'FRA',
}

export const translate = (object) => {
    return object[languageMap[navigator.language]];
}

export const translateItems = (object) => {
    return object[`description.${languageMap[navigator.language]}`]
}