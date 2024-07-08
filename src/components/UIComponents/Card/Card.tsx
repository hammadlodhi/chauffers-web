import React, {FC, ReactNode, useState} from 'react';
import {LocalizedHeading} from '../LocalizedHeading';

interface IProps {
    title?: string;
    dropdown?: ReactNode;
    children?: ReactNode;
    className?: string;
    id?: string;
    cardBackground?: 'dark' | 'light';
    rightContent?: ReactNode;
    titleUnderline?: boolean;
    expandOnClick?: boolean;
}

const Card: FC<IProps> = ({
    title,
    titleUnderline = false,
    children,
    className,
    dropdown,
    rightContent,
    id,
    cardBackground,
    expandOnClick = false,
}) => {
    const [expandCard, setExpandCard] = useState<boolean>(false);
    return (
        <div
            className={`card ${className} `}
            id={id}
            style={
                // eslint-disable-next-line no-nested-ternary
                cardBackground === 'dark'
                    ? {backgroundColor: '#000710'}
                    : cardBackground === 'light'
                    ? {backgroundColor: '#002332'}
                    : undefined
            }>
            {title && (
                <div
                    className={`card__title-container ${titleUnderline && 'card__border-bottom'}`}
                    onClick={expandOnClick ? () => setExpandCard(!expandCard) : undefined}>
                    <LocalizedHeading heading="h3" t={title} className="card__title" />
                    {dropdown && dropdown}
                    {rightContent && rightContent}
                </div>
            )}
            <div className={`card__children  ${expandOnClick && 'card__contract'} ${expandCard && 'card__expand'}`}>
                {children}
            </div>
        </div>
    );
};

export default Card;
