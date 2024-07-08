import React, {FC, useRef} from 'react';
import {useAppTranslation} from '@/hooks/useAppTranslation';
import {groundImage} from '@/util/images';

type Props = React.ImgHTMLAttributes<HTMLImageElement>;
export const Image: FC<Props> = ({alt = '', src, ...props}) => {
    const {t} = useAppTranslation();

    const ref = useRef<HTMLImageElement>(null);
    return (
        <img
            {...props}
            ref={ref}
            src={src || groundImage}
            alt={t(alt)}
            onError={() => {
                if (ref.current) {
                    ref.current.src = groundImage;
                }
            }}
        />
    );
};
