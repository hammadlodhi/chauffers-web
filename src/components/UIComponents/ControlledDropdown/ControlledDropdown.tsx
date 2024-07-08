import React, {FC} from 'react';
import {LocalizedSelect} from '../LocalizedSelect/LocalizedSelect';

import {FormField, FormFieldContainer} from '../FormFieldContainer/FormFieldContainer';
import {Controller} from 'react-hook-form';
import {useAppTranslation} from '@/hooks/useAppTranslation';

interface IAmountInput extends Omit<FormField, 'fieldType'> {
    options: Option[];
    onChange: (amount: Amount) => void;
    value: Amount;
    placeholder?: string;
}

export const AmountInput: React.FC<IAmountInput> = ({label, options, placeholder, value, onChange, ...props}) => {
    const {amount, unit} = value;
    const {t} = useAppTranslation();
    return (
        <FormFieldContainer className="amount-input" fieldType="localized-select" label={label} {...props}>
            <div className="form-field ">
                <input
                    type="number"
                    value={value.amount}
                    onChange={(e) => onChange({unit, amount: Number(e.target.value)})}
                    // placeholder="Enter an amount"
                    placeholder={placeholder && t(placeholder, null, {default: 'Enter an amount'})}
                    min="0"
                />
                <LocalizedSelect
                    value={value.unit}
                    options={options}
                    onChange={(val) => onChange({amount, unit: val})}
                />
            </div>
        </FormFieldContainer>
    );
};

interface IControlledAmount extends Omit<IAmountInput, 'value' | 'onChange'> {
    name: string;
    defaultValue?: OptionValue;
}

export const ControlledAmount: FC<IControlledAmount> = ({name, isRequired, ...props}) => {
    return (
        <Controller
            name={name}
            render={({field: {value, onChange}}) => (
                <AmountInput
                    value={value || props.defaultValue}
                    onChange={onChange}
                    isRequired={isRequired}
                    {...props}
                />
            )}
            rules={{required: isRequired}}
        />
    );
};
