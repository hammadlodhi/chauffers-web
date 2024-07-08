import {nanoid} from '@reduxjs/toolkit';
import React, {FC, ReactNode} from 'react';
import {LocalizedLabel} from '../LocalizedLabel/LocalizedLabel';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement>, LocalizedProps {
    label: string;
    icon?: ReactNode;
}

export const LocalizedCheckbox: FC<IProps> = React.forwardRef<HTMLInputElement, IProps>(
    ({label, components, icon, ...props}, ref): JSX.Element => {
        const id = nanoid();
        return (
            <div className="localized-checkbox mg-v-0">
                <input ref={ref} id={id} className="mg-r-4" type="checkbox" {...props} />
                {icon && icon}
                <LocalizedLabel t={label} htmlFor={id} components={components} />
            </div>
        );
    },
);
