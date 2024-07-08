import {GetServerSidePropsContext} from 'next';
import nookies, {setCookie, destroyCookie} from 'nookies';
import {ParsedUrlQuery} from 'querystring';

export const COOKIE_AGE = {
    THIRTY_DAYS: 30 * 24 * 60 * 60,
    TWO_WEEKS: 15 * 24 * 60 * 60,
    ONE_DAY: 1 * 24 * 60 * 60,
};

export const setCustomCookie = (
    key: string,
    value: string,
    maxAge: number = COOKIE_AGE.THIRTY_DAYS,
    ctx?: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
    setCookie(ctx, key, value, {
        maxAge,
        path: '/',
    });
};

export const removeCustomCookie = (key: string, ctx?: GetServerSidePropsContext<ParsedUrlQuery>) => {
    destroyCookie(ctx, key, {
        path: '/',
    });
};

export const getCustomCookie = (key: string, ctx?: GetServerSidePropsContext<ParsedUrlQuery>) => {
    return nookies.get(ctx)[key] ?? null;
};

