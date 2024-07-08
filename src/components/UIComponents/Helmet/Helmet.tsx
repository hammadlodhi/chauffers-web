import React, {FC} from 'react';
import Head from 'next/head';
import {useAppTranslation} from '@/hooks/useAppTranslation';

export interface IHelmet {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    faviconDarkMode?: string;
    favicon?: string;
}

export const Helmet: FC<IHelmet> = ({title = 'Daena', description, keywords, image, url, favicon, faviconDarkMode}) => {
    const {t: translate} = useAppTranslation();
    const localizedTitle = translate(title, null, {default: title});
    const localizedDescription = translate(description || '');
    const localizedKeywords = translate(keywords || '');
    let darkMode = false;
    if (typeof window !== 'undefined') {
        darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return (
        <Head>
            <link rel="icon" type="image/png" sizes="32x32" href={darkMode ? faviconDarkMode : favicon} />
            <title>{localizedTitle}</title>
            <meta charSet="utf-8" />
            {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" about="about" /> */}
            <meta name="description" content={localizedDescription}></meta>
            <meta property="og:title" content={localizedTitle}></meta>
            <meta name="twitter:title" content={localizedTitle}></meta>
            <meta property="og:description" content={localizedDescription}></meta>
            <meta name="twitter:description" content={localizedDescription}></meta>
            <meta property="og:image" content={image}></meta>
            <meta name="twitter:image" content={image}></meta>
            <meta property="og:url" content={url}></meta>
            <meta name="twitter:url" content={url} />
            <meta name="keywords" content={localizedKeywords} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
                rel="stylesheet"></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"></link>
        </Head>
    );
};
