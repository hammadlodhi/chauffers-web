import {useRouter} from 'next/router';
import React, {FC} from 'react';
import {LocalizedButton} from '../LocalizedButton/LocalizedButton';
import {DoubleArrowIcon} from '../SvgIcons/SvgIcons';
import {capitalize} from '@/util/common';

type IProps = {breadCrumpsData?: string[] | []};

const BreadCrumb: FC<IProps> = ({breadCrumpsData}) => {
    const router = useRouter();
    const allParams = breadCrumpsData?.length !== 0 ? breadCrumpsData : Object.values(router.query);

    return (
        <div className="bread-crumb">
            {allParams?.length !== 0 &&
                allParams?.map((param: any) => (
                    <>
                        <DoubleArrowIcon />
                        <LocalizedButton t={capitalize(param)} onClick={() => router.back()} />
                    </>
                ))}
        </div>
    );
};

export default BreadCrumb;
