import React from 'react';
import {useSelector} from 'react-redux';
import {selectWebApplication} from '@/redux-stores/WebApplication/WebApplication.slice';
import {Loader} from '../Loader/Loader';

export const LoaderContainer: React.FC = () => {
    const {
        loader: {visible},
    } = useSelector(selectWebApplication);

    return <>{visible && <Loader />}</>;
};
