import classNames from 'classnames';
import React from 'react';
import {useAppTranslation} from '@/hooks/useAppTranslation';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
}
export const IconButton: React.FC<IconButtonProps> = ({icon, type = 'button', title, className, ...props}) => {
    const {t} = useAppTranslation();
    return (
        <button className={classNames('icon-button', className)} title={title && t(title)} type={type} {...props}>
            {icon}
        </button>
    );
};

