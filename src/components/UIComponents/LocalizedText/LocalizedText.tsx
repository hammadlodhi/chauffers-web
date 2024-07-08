import React from 'react';
import {LocalizedInterpolation} from '../LocalizedInterpolation';
type Props = LocalizedProps & React.HTMLAttributes<HTMLSpanElement>;
const LocalizedText: React.FC<Props> = ({t = '', components, values, fallback, defaultTrans, ns, ...props}) => {
    const localizedProps = {t, components, values, fallback, defaultTrans, ns};
    return (
        <span {...props}>
            <LocalizedInterpolation {...localizedProps} fallback={fallback || t} />
        </span>
    );
};

export {LocalizedText};
