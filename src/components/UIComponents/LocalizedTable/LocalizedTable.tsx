import React from 'react';
import Spinner from '../Loader/Spinner';

type strOrNum = string | number | React.ReactElement;

type IData = Record<string, strOrNum>;

interface ITable {
    columns?: Array<string>;
    data?: any;
    onRowClick?: (selectedID: string) => void;
    showHeaders?: boolean;
    isLoading?: boolean;
}

const Table: React.FC<ITable> = ({columns, data, onRowClick, showHeaders = true, isLoading = false}) => {
    const rows = data?.map((dataObject: IData, index: number) => ({
        ...dataObject,
        sno: index,
    }));

    return (
        <div style={{overflowX: 'auto'}}>
            <table className="table">
                {showHeaders && (
                    <thead className="table__table-thead">
                        <tr className="table__table-row">
                            {columns?.map((title: string, index: number) => (
                                <th key={index} className={`${index !== 0 && 'table__center'} table__th`}>
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                {!isLoading && (
                    <tbody>
                        {rows?.length !== 0 &&
                            rows?.map((row: any, index: number) => (
                                <tr
                                    key={row.sno}
                                    className={`table__table-row ${onRowClick !== null && 'table__row-hover'}`}
                                    onClick={index !== 0 && onRowClick ? () => onRowClick(row.id) : undefined}>
                                    {columns?.map((columnTitle: string, columnIndex: number) => (
                                        <td key={columnIndex} className={'table__center table__td'}>
                                            {row[columnTitle.trim().replaceAll(' ', '').toLowerCase()]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                )}
            </table>
            {isLoading && <Spinner center={true} height="40" width="40" />}
            {!isLoading && rows?.length === 0 && <h4 className="table__no-data">No Data Found</h4>}
        </div>
    );
};

export default Table;
