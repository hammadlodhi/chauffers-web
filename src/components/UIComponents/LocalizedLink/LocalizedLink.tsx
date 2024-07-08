import React from 'react';
import Link, {LinkProps} from 'next/link';
import {LocalizedText} from '../LocalizedText';
import {useAppTranslation} from '@/hooks/useAppTranslation';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement>, LocalizedProps, Omit<LinkProps, 'href'> {}
export const LocalizedLink: React.FC<Props> = ({href, t, values, components, children, ...props}) => {
    const {t: translate} = useAppTranslation();
    return (
        <Link href={translate(href || '')} {...props}>
            {children}
            {<LocalizedText t={t} values={values} components={components} />}
        </Link>
    );
};
