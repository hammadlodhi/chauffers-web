import React, {FC} from 'react';
import {useAppTranslation} from '@/hooks/useAppTranslation';
import {setCustomCookie} from '@/util/cookie';
import {changeLanguage, countryCodes, langOptions} from '@/util/language';
import {Dropdown} from '../Dropdown/Dropdown';
import {Image} from '../Image/Image';
import {LocalizedText} from '../LocalizedText';

const CountryFlag: FC<{lang: string}> = ({lang}) => (
    <Image className="flag-img" src={`/static/images/icons/flags/${lang}.svg`} alt={lang} />
);

const LanguageMenu: FC = () => (
    <div className="language-dropdown__menu">
        {langOptions.map(({label, value, key}) => (
            <a
                className="language-dropdown__item"
                onClick={() => {
                    changeLanguage(value as Locales);
                    setCustomCookie('NEXT_LOCALE', value);
                }}
                key={value}>
                <CountryFlag lang={countryCodes[key]} />
                <LocalizedText t={label} />
            </a>
        ))}
    </div>
);

export const LanguageDropdown: FC = () => {
    const {lang} = useAppTranslation();
    const getSelectedLang = () => langOptions.find((language) => language.value === lang);
    return (
        <Dropdown
            className="language-dropdown mg-t-1"
            head={
                <div className="language-dropdown__head">
                    <CountryFlag lang={countryCodes[lang.split('-')[0]]} />
                    <LocalizedText t={getSelectedLang()?.key} />
                    <i className="filled-arrow down"></i>
                </div>
            }
            menu={<LanguageMenu />}
        />
    );
};

