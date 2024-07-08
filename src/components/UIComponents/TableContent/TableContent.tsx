import React, {FC, ReactNode} from 'react';
import {LocalizedHeading} from '../LocalizedHeading';
import Table from '../LocalizedTable/LocalizedTable';

interface IProps {
    title?: string;
    columns?: string[];
    rows?: any[];
    rightContent?: ReactNode;
    onRowClick?: (selectedID: string) => void;
    path?: string;
    showHeaders?: boolean;
    titleUnderline?: boolean;
    isLoading?: boolean;
}

const TableContent: FC<IProps> = ({
    columns,
    rows,
    title,
    rightContent,
    path,
    showHeaders,
    titleUnderline,
    ...props
}) => {
    return (
        <div className="table-content">
            {(title || rightContent) && (
                <div className={`table-content__title-container ${titleUnderline && 'table-content__underline'}`}>
                    {title && <LocalizedHeading heading="h6" t={title} className="table-content__title" />}
                    {rightContent && rightContent}
                </div>
            )}
            {path && path}
            <Table columns={columns} data={rows} showHeaders={showHeaders} {...props} />
        </div>
    );
};

export default TableContent;
