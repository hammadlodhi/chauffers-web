import React from 'react';
import classNames from 'classnames';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
}
export const IconButton: React.FC<IconButtonProps> = ({icon, className, ...props}) => {
    return (
        <button className={classNames('icon-button', className)} {...props}>
            {icon}
        </button>
    );
};
