"use client"
import classNames from 'classnames';
import React, {FC, ButtonHTMLAttributes, ReactNode} from 'react';
import {LocalizedText} from '../LocalizedText';
import {useRouter} from 'next/navigation';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, LocalizedProps {
    variant?:
        | 'filled'
        | 'filled-and-uppercase'
        | 'transparent-bottom-rounded'
        | 'filled-dark-and-uppercase'
        | 'category-filter';
    size?: 'small' | 'medium' | 'large' | 'full' | 'fit';
    icon?: ReactNode;
    icon2?: ReactNode;
    onClick?: (() => void) | any;
    href?: string;
}
export const LocalizedButton: FC<IButton> = ({
    className,
    variant = 'filled',
    size = 'small',
    type = 'button',
    icon,
    icon2,
    onClick,
    href,
    ...props
}) => {
    const router = useRouter();

    return (
        <button
            className={classNames(
                className,
                'localized-button',
                `localized-button--${variant}`,
                `localized-button--${size}`,
                {'localized-button--icon': !!icon},
            )}
            type={type}
            {...props}
            onClick={(e: any) => {
                e.stopPropagation();
                onClick?.();
                href && href.length > 0 && router.push(href);
            }}>
            {icon}
            <LocalizedText {...props} />
            {icon2}
        </button>
    );
};
