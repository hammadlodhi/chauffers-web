import React, {FC} from 'react';
import {LocalizedButton} from '../LocalizedButton/LocalizedButton';
import {LocalizedContent} from '../LocalizedContent';
import {LocalizedHeading} from '../LocalizedHeading';
import {homeRoute} from '@/util/routes';
import {useRouter} from 'next/router';
import {LocalizedText} from '../LocalizedText';

interface Props {
    type?: 'page-not-found' | 'request-failed' | 'unknown';
}

export const ErrorComponent: FC<Props> = ({type = 'unknown'}) => {
    const router = useRouter();
    const heading = `ERROR_PAGE.${type.replace(/-/g, '_').toUpperCase()}.HEADING`;
    const description = `ERROR_PAGE.${type.replace(/-/g, '_').toUpperCase()}.DESCRIPTION`;

    return (
        <div className="error-page">
            {/* <Image src={oops} /> */}
            <LocalizedText t="Oops!" className="error-page__oops" />
            <LocalizedHeading t={heading} />
            <LocalizedContent t={description} />
            <LocalizedButton
                t="GO TO HOMEPAGE"
                size="medium"
                variant="filled-and-uppercase"
                onClick={() => router.push({pathname: homeRoute, query: {}})}
            />
        </div>
    );
};
