import React from 'react';
import useTranslation from 'next-translate/useTranslation';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LocalizedExternalLink: React.FC<Props> = ({href, children, ...props}) => {
    const {t: translate} = useTranslation('common');
    return (
        <a href={translate(href || '#!')} target="_blank" rel="noreferrer" {...props}>
            {children}
        </a>
    );
};
