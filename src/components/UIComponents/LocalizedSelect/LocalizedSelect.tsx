import React, {FC, useState} from 'react';
import {LocalizedText} from '../LocalizedText';
import {Controller} from 'react-hook-form';
import classNames from 'classnames';
import {defaultSelectHelpText, defaultSelectPlaceholder} from '@/util/form';
import {LocalizedButton} from '../LocalizedButton/LocalizedButton';
import {FormField, FormFieldContainer} from '../FormFieldContainer/FormFieldContainer';
import {Select} from '../Select/Select';

interface LocalizedSelectProps extends Omit<FormField, 'fieldType'> {
    onChange: (value: OptionValue) => void;
    value?: OptionValue;
    options: Option[] | undefined;
    type?: 'lang' | 'orange' | 'default';
    placeholder?: string;
    headText?: string; // optional value to show in place of the selected option label.
}

export const LocalizedSelect: React.FC<LocalizedSelectProps> = ({
    options,
    onChange,
    value,
    label,
    isRequired,
    error,
    size,
    type = 'default',
    placeholder = defaultSelectPlaceholder,
    errorText = defaultSelectHelpText,
    headText,
    className,
    ...props
}) => {
    const selectedOption = options?.find((option) => option.value === value);
    const [menuOpen, setMenuOpen] = useState(false);
    const head = (
        <div className={classNames('form-field ', !selectedOption && 'placeholder')}>
            <LocalizedText t={headText || selectedOption?.label || placeholder} />
            <i className="filled-arrow down"></i>
        </div>
    );
    const menu = (
        <div className="localized-select__menu">
            {options?.map((option, index) => (
                <LocalizedButton
                    key={index}
                    t={option.label}
                    onClick={() => {
                        onChange(option.value);
                        setMenuOpen(false);
                    }}
                />
            ))}
        </div>
    );
    return (
        <FormFieldContainer
            fieldType="localized-select"
            label={label}
            errorText={errorText}
            isRequired={isRequired}
            error={error}
            size={size}
            className={className}
            {...props}>
            <Select
                className={classNames('select', type)}
                head={head}
                menu={menu}
                transition="collapse"
                menuOpen={menuOpen}
                setMenu={(val: boolean) => setMenuOpen(val)}
            />
        </FormFieldContainer>
    );
};
interface IControlledSelect extends Omit<LocalizedSelectProps, 'value' | 'onChange'> {
    name: string;
}
export const ControlledSelect: FC<IControlledSelect> = ({name, isRequired, ...props}) => {
    return (
        <Controller
            name={name}
            render={({field: {value, onChange}}) => (
                <LocalizedSelect value={value} onChange={onChange} isRequired={isRequired} {...props} />
            )}
            rules={{required: isRequired}}
        />
    );
};
