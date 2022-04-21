import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

type tableProps = {
    rows: GridRowsProp[] | any[],
    columns: GridColDef[]
}

const Table = (props: tableProps) => {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={props.rows} columns={props.columns} />
        </div>
    )
};

export default Table;