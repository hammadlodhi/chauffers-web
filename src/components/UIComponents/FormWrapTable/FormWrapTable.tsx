import React, {FC} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import TableContent from '../TableContent/TableContent';
import {LocalizedInput} from '../LocalizedInput/LocalizedInput';
import {DoneIcon} from '../SvgIcons/SvgIcons';
import {IconButton} from '../IconButton/IconButton';
import {useRouter} from 'next/router';
import {showToast} from '../ShowToast/ShowToast';

interface IFormData {
    name: string;
    latLong: string | null;
}

const FormWrapTable: FC<any> = ({rows, onSubmission, ...props}) => {
    const {query} = useRouter();
    const methods = useForm<IFormData>({
        defaultValues: {
            name: '',
            latLong: '' || null,
        },
    });
    const {register, handleSubmit, reset} = methods;

    const onSubmit = async (data: IFormData) => {
        if (!data.name) {
            showToast('Please add name', {type: 'error'});
            return;
        }
        onSubmission(data);
        reset();
    };
    const checkCityParam =
        query.country &&
        query.region &&
        query.municipality &&
        query.city &&
        !query.isShoppingArea &&
        !query.neighbourhood;

    const inputPlaceholder = rows.length === 0 ? 'Add New' : 'Type here';

    const data = [
        !checkCityParam && {
            'serial': '-',
            'name': !checkCityParam && <LocalizedInput placeholder={inputPlaceholder} {...register('name')} />,
            'longitude&latitude': <LocalizedInput placeholder={inputPlaceholder} {...register('latLong')} />,
            'actions': <IconButton icon={<DoneIcon />} type="submit" className="tick-green" />,
        },
        ...rows,
    ];

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="form-wrap-table">
                <TableContent rows={data} {...props} />
            </form>
        </FormProvider>
    );
};

export default FormWrapTable;
