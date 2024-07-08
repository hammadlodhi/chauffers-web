import React, {FC, InputHTMLAttributes, ReactElement} from 'react';
import {useAppTranslation} from '@/hooks/useAppTranslation';
import {IconButton} from '../IconButton/IconButton';
import {FormField, FormFieldContainer} from '../FormFieldContainer/FormFieldContainer';

export interface IProps
    extends Omit<FormField, 'fieldType'>,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'> {
    icon?: ReactElement;
}

export const LocalizedInput: FC<IProps> = React.forwardRef<HTMLInputElement, IProps>(
    ({error, helpText, placeholder, className, isRequired, label, icon, size, ...props}, ref) => {
        const {t} = useAppTranslation();

        return (
            <FormFieldContainer
                fieldType="localized-input"
                label={label}
                className={className}
                helpText={helpText}
                isRequired={isRequired}
                error={error}
                size={size}>
                <div className="form-field">
                    <input
                        ref={ref}
                        placeholder={placeholder && t(placeholder, null, {default: placeholder})}
                        {...props}
                    />
                    {icon && <IconButton icon={icon} />}
                </div>
            </FormFieldContainer>
        );
    },
);
