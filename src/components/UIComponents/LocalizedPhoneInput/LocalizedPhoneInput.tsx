import classNames from 'classnames';
import React, {FC} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import ReactPhoneInput, {PhoneInputProps} from 'react-phone-input-2';
import {useAppTranslation} from '@/hooks/useAppTranslation';
import {validatePhone} from '@/util/validation';
import {LocalizedLabel} from '../LocalizedLabel/LocalizedLabel';

interface IPhoneInputProps extends PhoneInputProps {
    label?: string;
    onChange: (phoneNo: string) => void;
    isRequired?: boolean;
    isError?: boolean;
    helpText?: string;
}

export const LocalizedPhoneInput: FC<IPhoneInputProps> = ({
    value,
    onChange,
    label,
    isRequired = false,
    isError = false,
    helpText,
    placeholder,
}): JSX.Element => {
    const {t} = useAppTranslation();
    const labelText = label && (isRequired ? `${t(label)}*` : t(label));
    return (
        <div className={classNames('phone-input', {'phone-input--error': isError})}>
            {label && (
                <LocalizedLabel
                    t={labelText}
                    className={classNames('phone-input__label', {required: isRequired}, 'mg-b-3')}
                />
            )}
            <ReactPhoneInput
                country="fr"
                onlyCountries={[
                    'fi',
                    'se',
                    'no',
                    'dk',
                    'de',
                    'ee',
                    'ru',
                    'at',
                    'ch',
                    'fr',
                    'it',
                    'es',
                    'gb',
                    'nl',
                    'be',
                ]}
                countryCodeEditable={false}
                containerClass="phone-input__container"
                value={value}
                masks={{fi: '.. .... ...'}}
                disableDropdown={false}
                placeholder={placeholder ? t(placeholder) : '+358 12345678'}
                onChange={(_value, _country, _e, formattedValue) => onChange(formattedValue)}
            />
            {isError && <LocalizedLabel t={helpText} className="error" />}
        </div>
    );
};

interface IControlledPhoneInputProps extends Omit<IPhoneInputProps, 'onChange' | 'value'> {
    name: string;
}

export const ControlledLocalizedPhoneInput: React.FC<IControlledPhoneInputProps> = ({
    name,
    label,
    isRequired,
    ...props
}) => {
    const {control} = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            rules={{required: isRequired, validate: validatePhone}}
            render={({field: {onChange, value}}) => (
                <LocalizedPhoneInput
                    {...props}
                    isRequired={isRequired}
                    onChange={(val: string) => onChange(val)}
                    value={value}
                    label={label}
                />
            )}
        />
    );
};
