import React, {FC, useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {ControlledSelect} from '../LocalizedSelect/LocalizedSelect';
import {useRouter} from 'next/router';

const FilterDropdown: FC = () => {
    const router = useRouter();
    const methods = useForm({
        defaultValues: {
            active: router.query.active ? Number(router.query.active) : 2,
        },
    });
    const {handleSubmit, watch} = methods;

    const onFilter = (data: any) => {
        console.log(data);
    };

    useEffect(() => {
        const subscription = watch((data) => {
            router.push({
                pathname: router.pathname,
                query: {...router.query, active: data.active},
            });
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const FilterDropDownData = [
        {
            value: 0,
            label: 'Active',
        },
        {
            value: 1,
            label: 'Inactive',
        },
        {
            value: 2,
            label: 'All',
        },
    ];

    return (
        <div className="filter-dropdown">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onFilter)}>
                    <div className="filter-dropdown__filter-container">
                        <ControlledSelect name="active" placeholder="Active" options={FilterDropDownData} />
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default FilterDropdown;
