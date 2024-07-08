import setLanguage from 'next-translate/setLanguage';
import {enGB, es, fr} from 'date-fns/locale';
import {Locale} from 'date-fns';
export const changeLanguage = async (lang: Locales) => await setLanguage(lang);
export const langOptions = [
    {
        value: 'en-GB',
        label: 'LANGUAGES.ENGLISH',
        key: 'en',
    },
    {
        value: 'fr-FR',
        label: 'LANGUAGES.FRENCH',
        key: 'fr',
    },
    {
        value: 'es-ES',
        label: 'LANGUAGES.ESPANOL',
        key: 'es',
    },
];

export const countryCodes: {[key: string]: string} = {
    en: 'uk',
    fr: 'france',
    es: 'spain',
};

export const getCookie = (name: string) => {
    if (document !== undefined) {
        const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
        if (match) {
            return match[2];
        }
        return '';
    }

    // Add a return statement here to handle the case when document is undefined
    return '';
};

export const getNextLocale = () => getCookie('NEXT_LOCALE');

export const dateFnsLocales: Record<string, Locale> = {
    'en-GB': enGB,
    'fr-FR': fr,
    'es-ES': es,
};
