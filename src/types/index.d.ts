import {AxiosRequestConfig} from 'axios';
import {IncomingMessage} from 'http';

declare global {
    declare interface RequestParams {
        url: string;
        path: string;
        method: string;
        params?: string;
        body?: BodyInit;
    }

    declare interface ResponseObject {
        code: number;
        data: unknown;
        type: string;
        error: null | {message: string};
    }

    type FetchOptions = RequestInit;

    declare type ResponseParams = Partial<ResponseObject>;

    interface ErrorResponseShape<T = AnyObject> {
        code: number;
        message: string;
        data: Record<string, any>;
    }
    interface SuccessResponseShape<T = AnyObject> {
        code: number;
        message: string;
        data: T;
    }
    interface SuccessResponse<T = AnyObject> {
        success: SuccessResponseShape<T>;
        error: null;
    }

    interface ErrorResponse<T = AnyObject> {
        error: ErrorResponseShape<T>;
        success?: null;
    }

    type ApiResponse<T = AnyObject> = SuccessResponse<T> | ErrorResponse<T>;

    type AnyObject = Record<string, unknown>;

    interface RequestHeaders {
        'Accept': string;
        'Content-Type': string;
        'token'?: string;
        'authorization'?: string;
    }

    interface ApiRequest<T = AnyObject> extends AxiosRequestConfig {
        path?: string;
        data?: T;
        headers?: RequestHeaders;
        isServer?: boolean;
        token?: string;
        params?: AnyObject;
        locale?: string;
        baseApi?: string;
    }

    interface ServerSideRequest extends IncomingMessage {
        lng: string;
        query: {
            __nextLocale: string;
        };
    }

    type ServerSideApiRequest<T> = ApiRequest<T> & {context: GetServerSidePropsContext<ParsedUrlQuery>};
    type Locales = 'en-GB' | 'fi-FI' | 'sv-SE';
    type ILink = {
        linkText: string;
        url?: string;
        subNav?: ILink[];
    };
}
