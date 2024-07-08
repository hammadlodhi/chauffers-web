import React from 'react';
import {useRouter} from 'next/router';
import {Pagination as Paginate} from '@mui/material';

type IPagination = {
    pageCount: number;
};

export const Pagination: React.FC<IPagination> = ({pageCount}) => {
    const router = useRouter();
    const routeToNewPage = (e: any, newPage: number) => {
        e.preventDefault();
        router.push({
            pathname: router.pathname,
            query: {...router.query, page: newPage},
        });
    };

    return (
        <div className="pagination">
            <Paginate count={pageCount} page={Number(router.query.page || 1)} onChange={routeToNewPage} />
        </div>
    );
};
