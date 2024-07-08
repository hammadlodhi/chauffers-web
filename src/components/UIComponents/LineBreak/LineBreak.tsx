import React from 'react';
import {LocalizedText} from '../LocalizedText';

interface IProps {
    description?: string;
}

const LineBreak = ({description}: IProps) => {
    return (
        <div className="line-break">
            <div className="or-divider">
                <hr />
                <LocalizedText t={description} className="or-text" />
                <hr />
            </div>
        </div>
    );
};

export default LineBreak;
