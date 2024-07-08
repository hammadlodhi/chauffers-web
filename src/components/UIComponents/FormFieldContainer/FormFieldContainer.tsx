import classNames from 'classnames';
import React, {FC} from 'react';
import {LocalizedLabel} from '../LocalizedLabel/LocalizedLabel';
import {LocalizedText} from '../LocalizedText';

export type FieldType =
    | 'localized-input'
    | 'localized-textarea'
    | 'localized-select'
    | 'searchable-dropdown'
    | 'autocomplete-address'
    | 'file-uploader'
    | 'radio-buttons'
    | 'localized-calendar'
    | 'checkboxes'
    | 'phone-input'
    | 'image-upload-field'
    | 'time-select';

    export type FormField = React.PropsWithChildren<{
        fieldType: FieldType;
        error?: boolean;
        helpText?: string;
        errorText?: string;
        label?: string;
        isRequired?: boolean;
        size?: 'small' | 'medium' | 'large' | 'medium-large' | 'undefined';
        className?: string;
        loading?: boolean;
    }>;

export const FormFieldContainer: FC<FormField> = ({
    fieldType,
    label,
    size = 'medium',
    helpText,
    isRequired,
    error,
    children,
    className,
    loading = false,
}) => {
    return (
        <div className={classNames('form-field-container', className, fieldType, size, {required: isRequired, error})}>
            {label && <LocalizedLabel t={label} />}
            {loading ? 'Loading...' : children}
            {error && helpText && <LocalizedText t={helpText} />}
        </div>
    );
};
