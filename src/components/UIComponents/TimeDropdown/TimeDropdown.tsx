import React, {useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {ControlledSelect} from '../LocalizedSelect/LocalizedSelect';
import {useRouter} from 'next/router';
import {TimeDropdownData} from 'src/util/constant-data';

const TimeDropdown = () => {
    const router = useRouter();
    const methods = useForm({
        defaultValues: {
            time: router.query.time ? Number(router.query.time) : 4,
        },
    });
    const {handleSubmit, watch} = methods;

    const onFilter = (data: any) => {
        console.log(data);
    };

    useEffect(() => {
        const subscription = watch((data) => {
            router.push({
                pathname: router.asPath,
                query: {...router.query, time: data.time},
            });
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <div className="time-dropdown">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onFilter)}>
                    <div className="course-status__filter-container">
                        <ControlledSelect
                            name="time"
                            placeholder="FILTER_DROPDOWN.PLACEHOLDER"
                            options={TimeDropdownData}
                        />
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default TimeDropdown;
