import React, {FC} from 'react';
import {LocalizedButton} from '../LocalizedButton/LocalizedButton';
import {useRouter} from 'next/router';

type Category = {
    title: string;
    queryParam: string;
};

interface IProps {
    categoryData?: Category[];
    paramName: string;
}

const CategoryFilter: FC<IProps> = ({categoryData, paramName}) => {
    const router = useRouter();
    const currentCategoryParam = String(router.query[paramName]) || '';

    return (
        <div className="category-filter">
            {categoryData?.map((data, index) => (
                <LocalizedButton
                    t={data.title}
                    key={index}
                    variant="category-filter"
                    className={`${currentCategoryParam === data.queryParam && 'category-filter__selected'}`}
                    onClick={() =>
                        router.push({pathname: router.pathname, query: {...router.query, [paramName]: data.queryParam}})
                    }
                />
            ))}
        </div>
    );
};

export default CategoryFilter;
