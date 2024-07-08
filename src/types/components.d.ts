import {TransProps} from 'next-translate';
import {ReactNode} from 'react';

declare global {
    interface LocalizedProps extends Omit<TransProps, 'i18nKey'> {
        t?: string;
        className?: string;
    }
    type FormField = {
        fieldType: FieldType;
        error?: boolean;
        helpText?: string;
        errorText?: string;
        label?: string;
        isRequired?: boolean;
        className?: string;
        size?: 'small' | 'medium' | 'medium-large' | 'large';
    };
    type Amount = {
        amount?: number;
        unit: OptionValue;
    };
    type OptionValue = string | number;
    type Option = {
        value: OptionValue;
        label: string;
        description?: string;
        image?: string;
        icon?: ReactNode;
    };
    type SubCard = {
        title: string;
        description: string;
        vat: string;
        pricing: string;
        subscribed: string;
        list: string[];
        color: string;
    };
    type SubCardList = {
        listData?: SubCard[];
        plans?: PlanPayload[];
        months?: number;
    };

    type CardData = {
        [key: number]: SubCardList;
    };
    export type ImageResolution = {
        minWidth: number;
        minHeight: number;
        aspect: number;
    };
    export type Image = {
        imageData: string;
        name: string;
    };
}
