/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Locale} from 'date-fns';
import en from 'date-fns/locale/en-GB';
import {fi} from 'date-fns/locale';
import {sv} from 'date-fns/locale';
import {getSession} from 'next-auth/react';
import getConfig from 'next/config';
import moment from 'moment';

export const outputToConsole = (message: unknown, defaultValue?: string) => {
    if (process.env.APP_ENV === 'local') {
        console.log(
            '\x1b[33m%s\x1b[0m', //custom colored logs
            defaultValue?.toUpperCase() || 'PRINT',
            `:::${JSON.stringify(message)}`,
        );
    }
};
export const runTimeConfig = (isServer?: boolean) => {
    const config = getConfig();
    if (isServer) {
        return config.serverRuntimeConfig.config;
    }
    return config.publicRuntimeConfig.config;
};
export const getLangFromUrl = (url: string) => {
    return url.split('/')[3];
};
export const getLanguage = (lang: string) => {
    const languages: Record<string, any> = {
        'en-GB': en,
        'fi-FI': fi,
        'sv-SE': sv,
    };
    return languages[lang];
};
export const getServerSideRequest = async <T = AnyObject>(args: ServerSideApiRequest<T>) => {
    const {context, ...props} = args;
    const session = await getSession(context);
    const request: ApiRequest<T> = {
        ...props,
        isServer: true,
        locale: context.locale || context.cookies.NEXT_LOCALE,
        token: session?.accessToken,
    };
    return request;
};
export const urlConverter = (type: 'email' | 'phoneNumber', url: string) => {
    switch (type) {
        case 'email':
            return `mailto:${url}`;
        case 'phoneNumber':
            return `tel:${url}`;
        default:
            return `${url}`;
    }
};
export const runTimeServerConfig = () => {
    return process.env;
};
export const runTimeSharedConfig = () => {
    const config = getConfig();
    if (typeof window !== 'undefined') {
        const configValues = Object.values(config.publicRuntimeConfig.env) as {APP_URL: string}[];
        const env = configValues.find(
            (conf) => conf.APP_URL.toLowerCase().split('://')[1] === window.location.host.toLowerCase(),
        );
        return env;
    }
    return config.publicRuntimeConfig.env[runTimeServerConfig().APP_ENV!] || {};
};

export const getAppUrl = (lang: Locales, pathName: string) => `${runTimeSharedConfig().APP_URL}/${lang}${pathName}`;
export const getApiUrl = (pathName: string) => `${runTimeSharedConfig().BASE_API}/${pathName}`;

export enum Environments {
    PRODUCTION = 'prod',
    DEV = 'dev',
    STAGE = 'stage',
    LOCAL = 'local',
}

export const getGoogleMapKey = (): string => {
    return runTimeSharedConfig().GOOGLE_MAP_KEY;
};

export const formatTime = (time: any) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);

    const amPm = hour >= 12 ? 'pm' : 'am';
    const formattedHour = hour % 12 || 12;
    const formattedMinute = minute.toString().padStart(2, '0');

    return `${formattedHour}:${formattedMinute}${amPm}`;
};

const daysOfWeek = ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const formatDayRange = (days: any) => {
    return days
        .reduce(
            (ranges: any, day: any, i: any, arr: any) =>
                i && day !== arr[i - 1] + 1 ? [...ranges, [day]] : (ranges[ranges.length - 1].push(day), ranges),
            [[]],
        )
        .map((range: any) => {
            if (range.length > 2) {
                return `${daysOfWeek[range[0]]} - to - ${daysOfWeek[range[range.length - 1]]}`;
            } else if (range.length > 1) {
                return `${daysOfWeek[range[0]]}, ${daysOfWeek[range[range.length - 1]]}`;
            }
            return daysOfWeek[range[0]];
        })
        .join(', ');
};


export const replaceSpacesWithHyphens = (inputString: string) => {
    if (inputString) {
        return inputString.replace(/\s/g, '-');
    }
    return '';
};

export const formatBackendDate = (backendDateString: string) => {
    if (backendDateString.length === 0) {
        return undefined;
    }

    const backendDate = new Date(backendDateString);
    const year = backendDate.getFullYear();
    const month = (backendDate.getMonth() + 1).toString().padStart(2, '0');
    const day = backendDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
};

export const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}-${month}-${year}`;
};

export const parseTimeToSeconds = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60;
};

export const formatSecondsToTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
};

const camelToSnakeCase = (str: string) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const getParams = (params: Record<string, any>) => {
    const paramsInSnakeCase: Record<string, any> = {};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const filteredParams = Object.entries(params).filter(([__, value]) =>
        value !== undefined && value !== null && typeof value === 'string' ? value.length > 0 : true,
    );
    filteredParams.forEach(([key, val]) => (paramsInSnakeCase[camelToSnakeCase(key)] = encodeURIComponent(val)));
    return paramsInSnakeCase;
};

export const getUrlQuery = (urlQuery: Record<string, any>) => {
    const params = getParams(urlQuery);
    type DuplicateParam = Record<string, any[]>;
    let query = '';
    const addParam = (paramKey: string, paramValue: any) =>
        (query += `${query.includes('?') ? '&' : '?'}${paramKey}=${encodeURIComponent(paramValue)}`);
    Object.entries(params).forEach(([key, value]) => {
        if (key === 'duplicate_params') {
            const duplicateParams = value as unknown as DuplicateParam;
            Object.entries(duplicateParams).forEach(([dupKey, dupValues]) =>
                dupValues.map((val) => addParam(dupKey, val)),
            );
        } else {
            addParam(key, value);
        }
    });
    return query;
};
export const scrollRestoration = () => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
    return null;
};

export const convertStringToArray = (value: any) => {
    return [value];
};

export const validateTimeOrder = (startTime: string, endTime: string) => {
    if (startTime && endTime) {
        return startTime <= endTime || 'KEYWORDS.START_TIME_SMALLER';
    }
    return true; // If either field is empty, it's considered valid
};

export const removeSessionTokenCookie = () => {
    document.cookie = 'next-auth.session-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

export const isFile = (obj: string | Record<string, any> | null) => {
    return obj instanceof File;
};

export const capitalize = (name: string) => {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
};

export const generateFileNameWithTimestamp = (extension: string) => {
    const timestamp = new Date().getTime(); // Get current time in milliseconds
    return `file_${timestamp}.${extension}`;
};

export const getFileExtension = (filename: string): string => {
    const lastDotIndex = filename.lastIndexOf('.');
    return lastDotIndex !== -1 ? filename.slice(lastDotIndex + 1) : '';
};

export const allFieldsEmpty = (obj: Record<string, any>): boolean => {
    const isEmptyValue = (value: any) => (Array.isArray(value) ? value.length === 0 : value === '');
    return Object.values(obj).every(isEmptyValue);
};

export const generateDefaultValues = (count: number, keyName: string) => {
    const defaultValues: Record<string, string> = {};
    for (let i = 0; i < count; i++) {
        defaultValues[`${keyName}${i + 1}`] = ''; // Add your default values for each input here
    }
    return defaultValues;
};

export const convertObjectToArray = (
    data: Record<string, string | number> | null,
    excludedFields: string[] = [],
): Record<string, string | number | boolean>[] => {
    if (!data) return [];

    return Object.entries(data)
        .filter(([key]) => !excludedFields.includes(key))
        .map(([key, value]) => ({name: capitalize(key), data: value ? value : '-'}));
};

export const isEmpty = <T>(obj: T | null | undefined): boolean => {
    if (obj === null || obj === undefined) {
        return true;
    }
    if (Array.isArray(obj) || typeof obj === 'object') {
        return Object.keys(obj).length === 0;
    }
    return false;
};

export const isImage = (file: File) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
    return allowedMimeTypes.includes(file.type);
};

export const addHoursToTime = (timeString: string, hoursToAdd: string) => {
    return moment(timeString, 'HH:mm').add(Number(hoursToAdd), 'hours').format('HH:mm');
};

export const getCurrentTime = () => {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};

export const isTimeInRange = (startTime: string, endTime: string) => {
    // Convert start time to milliseconds since midnight
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const startMilliseconds = startHours * 60 * 60 * 1000 + startMinutes * 60 * 1000;
    // Convert end time to milliseconds since midnight
    const [endHours, endMinutes] = endTime.split(':').map(Number);
    const endMilliseconds = endHours * 60 * 60 * 1000 + endMinutes * 60 * 1000;
    // Convert current time to milliseconds since midnight
    const [currentHours, currentMinutes] = getCurrentTime().split(':').map(Number);
    const currentMilliseconds = currentHours * 60 * 60 * 1000 + currentMinutes * 60 * 1000;
    // Check if current time falls within the range
    return currentMilliseconds >= startMilliseconds && currentMilliseconds <= endMilliseconds;
};

export const getCurrentWeekdayName = () => {
    const currentDate = new Date();
    const currentWeekdayNumber = currentDate.getDay();
    const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentWeekdayName = weekdays[currentWeekdayNumber];
    return currentWeekdayName;
};

export const toFormData = (data: Record<string, string | number | boolean | string[] | number[] | File>) => {
    const formData = new FormData();
    for (const key in data) {
        // if (data.hasOwnProperty(key)) {
        const value = data[key];
        if (Array.isArray(value)) {
            formData.append(key, JSON.parse(JSON.stringify(value)));
        } else if (value instanceof File) {
            formData.append(key, value);
        } else {
            formData.append(key, value.toString());
        }
    }
    // }
    return formData;
};

export const truncatedText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export const sortByCustomOrder = (order: string[]): any => {
    return order.sort((a: any, b: any) => order.indexOf(a.name) - order.indexOf(b.name));
};
