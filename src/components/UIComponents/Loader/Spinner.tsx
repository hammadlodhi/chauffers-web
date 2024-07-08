import React from 'react';
import {TailSpin} from 'react-loader-spinner';

const Spinner = ({height = '80', width = '80', color = '#f63b00', center = false}) => {
    return (
        <div className={center ? 'loader__center' : ''} style={{padding: '10px'}}>
            <TailSpin
                height={height}
                width={width}
                color={color}
                ariaLabel="tail-spin-loading"
                radius=""
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Spinner;
