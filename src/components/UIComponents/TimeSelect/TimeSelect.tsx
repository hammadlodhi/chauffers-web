import React, {FC, useEffect, useRef, useState} from 'react';
import {FormField, FormFieldContainer} from '../FormFieldContainer/FormFieldContainer';
import {Controller, FieldValues, RegisterOptions} from 'react-hook-form';
import classNames from 'classnames';
import {LocalizedText} from '../LocalizedText';
import useOnClickOutside from 'use-onclickoutside';
import {useKeyPress} from '@/hooks/useKeyPress';

type TimeUnit = 'hour' | 'minute' | 'second';
interface Props extends Omit<FormField, 'fieldType'> {
    name?: string;
    value?: string;
    onChange?: (val: string) => void;
    placeholder?: string;
    step?: Record<TimeUnit, number> | null;
    rules?: Omit<RegisterOptions<FieldValues, string>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    hideSeconds?: boolean;
    position?: 'top' | 'bottom';
}

export const TimeSelect: FC<Props> = ({
    value,
    onChange,
    placeholder,
    step = {hour: 0, minute: 15, second: 0},
    hideSeconds = true,
    position,
    className = '',
    ...props
}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const getWithPreZero = (val: number) => `${val < 10 ? '0' : ''}${val}`;
    const hour = value?.split(':')[0] || '00';
    const minute = value?.split(':')[1] || '00';
    const second = value?.split(':')[2] || '00';
    const values: Record<TimeUnit, string> = {hour, minute, second};
    const hours = Array.from(Array(24)).map((__, h) => ({
        label: getWithPreZero(h),
        value: getWithPreZero(h),
    }));

    const getHourAndMinutes = (type: 'minute' | 'second') => {
        let options = Array.from(Array(60)).map((__, num) => {
            if (step !== null && type in step && step[type] && num % step[type] !== 0) return null;
            return {
                label: getWithPreZero(num),
                value: getWithPreZero(num),
            };
        }) as Option[];
        options = options.filter((it) => it !== null);
        return options;
    };
    const minutes = getHourAndMinutes('minute');
    const seconds = getHourAndMinutes('second');
    const Head: FC = () => {
        const text = hideSeconds ? `${hour}:${minute}` : value;
        return (
            <div className={classNames('form-field', !value && 'placeholder')}>
                <LocalizedText t={text || placeholder || 'Select time'} />
                <i className="filled-arrow down"></i>
            </div>
        );
    };
    const changeHandlers: Record<TimeUnit, (val: OptionValue) => void> = {
        hour: (val: OptionValue) => onChange?.(`${val}:${minute}:${second}`),
        minute: (val: OptionValue) => onChange?.(`${hour}:${val}:${second}`),
        second: (val: OptionValue) => onChange?.(`${hour}:${minute}:${val}`),
    };
    let timeUnits: TimeUnit[] = ['hour', 'minute', 'second'];
    if (hideSeconds) {
        timeUnits = timeUnits.filter((unit) => unit !== 'second');
    }

    const options: Record<TimeUnit, Option[]> = {hour: hours, minute: minutes, second: seconds};
    const Menu: FC = () => (
        <div className="localized-select__menu time-select__menu">
            {timeUnits.map((unit, i) => (
                <div key={i} className={`${unit}-menu`} id={`${className}${className ? '-' : ''}${unit}-menu`}>
                    {options[unit].map((option, index) => (
                        <button
                            className={classNames('small', {
                                active: option.value === values[unit],
                            })}
                            id={`${unit}-${option.value}`}
                            key={index}
                            type="button"
                            onClick={() => changeHandlers[unit](option.value)}>
                            {option.label}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );

    const Select: FC = () => {
        const ref = useRef<HTMLDivElement>(null);
        useOnClickOutside(ref, () => setOpenMenu(false));
        useKeyPress('Escape', () => setOpenMenu(false));
        return (
            <div ref={ref} className={classNames('select dropdown collapse', {open: openMenu})}>
                <button className="dropdown__head" type="button" onClick={() => setOpenMenu(!openMenu)}>
                    <Head />
                </button>
                <div className={classNames('dropdown__menu', {open: openMenu})}>
                    <Menu />
                </div>
            </div>
        );
    };
    const scroll = () => {
        if (document !== undefined) {
            timeUnits.forEach((unit) => {
                const height = options[unit].findIndex((it) => it.value === values[unit]);
                const menuElement = document.getElementById(`${className}${className ? '-' : ''}${unit}-menu`);

                menuElement?.scrollTo({top: height * 40});
            });
        }
    };
    useEffect(() => {
        scroll();
    }, [value, openMenu]);

    return (
        <FormFieldContainer
            fieldType="time-select"
            className={classNames('localized-select', `time-select--${position}`, className)}
            {...props}>
            <Select />
        </FormFieldContainer>
    );
};

export const ControlledTimeSelect: FC<Props> = ({name, rules, isRequired, ...props}) => {
    return (
        <Controller
            rules={{...rules, required: isRequired}}
            name={name || 'time-select'}
            render={({field: {value, onChange}}) => {
                return <TimeSelect value={value} onChange={onChange} isRequired={isRequired} {...props} />;
            }}
        />
    );
};
