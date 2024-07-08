import React, {FC, InputHTMLAttributes} from 'react';
import {v4 as uuid} from 'uuid';
import {FormField, FormFieldContainer} from '../FormFieldContainer/FormFieldContainer';
import {LocalizedContent} from '../LocalizedContent';
import {LocalizedLabel} from '../LocalizedLabel/LocalizedLabel';
import {Image} from '../Image/Image';

export interface IProps
    extends Omit<FormField, 'fieldType'>,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'> {
    options: Option[];
}

export const LocalizedRadioButtons: FC<IProps> = React.forwardRef<HTMLInputElement, IProps>(
    ({options, label, size, ...props}, ref) => {
        return (
            <FormFieldContainer fieldType="radio-buttons" label={label} size={size}>
                <div className="form-field pd-t-4 pd-b-4">
                    {options.map((option, i) => {
                        const id = uuid(); // Generate unique ID for each radio button
                        return (
                            <div key={i} className="radio-buttons__option">
                                <input id={id} ref={ref} type="radio" value={option.value} {...props} />
                                <div className="radio-buttons__option-details">
                                    {option.image && <Image src={option.image} />}
                                    <LocalizedLabel htmlFor={id} t={option.label} />
                                    {option.description && <LocalizedContent t={option.description} />}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </FormFieldContainer>
        );
    },
);
