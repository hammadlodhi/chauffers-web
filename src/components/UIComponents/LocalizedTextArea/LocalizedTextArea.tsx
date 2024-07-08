import React, {FC, TextareaHTMLAttributes} from 'react';
import {useAppTranslation} from '@/hooks/useAppTranslation';
import {FormField, FormFieldContainer} from '../FormFieldContainer/FormFieldContainer';
import {defaultTextAreaPlaceholder} from '@/util/form';

type Props = Omit<FormField, 'fieldType'> & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>;

export const LocalizedTextArea: FC<Props> = React.forwardRef<HTMLTextAreaElement, Props>(
    ({error, placeholder = defaultTextAreaPlaceholder, isRequired, label, size, ...props}, ref) => {
        const {t} = useAppTranslation();
        return (
            <FormFieldContainer
                fieldType="localized-textarea"
                label={label}
                isRequired={isRequired}
                error={error}
                size={size}
                {...props}>
                <div className="form-field">
                    <textarea ref={ref} placeholder={t(placeholder)} {...props} />
                </div>
            </FormFieldContainer>
        );
    },
);
