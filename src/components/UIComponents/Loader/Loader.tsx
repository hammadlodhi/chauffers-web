import React from 'react';
import {Backdrop} from '../Backdrop/Backdrop';
import Spinner from './Spinner';

export const Loader: React.FC = () => {
    return (
        <Backdrop active={true}>
            <div className="loader">
                <Spinner />
            </div>
        </Backdrop>
    );
};
