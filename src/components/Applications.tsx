import React from 'react';
import { useAtom } from 'jotai';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, Chip, Alert } from '@mui/material';
import { applicationsAtom } from '../store/applications';

export const Applications = () => {
    const [applications] = useAtom(applicationsAtom);

    if(!applications) {
        return <></>
    }

    const columns: GridColDef[] = [
        {field: 'firstName', headerName: 'Имя', width: 150},
        {field: 'lastName', headerName: 'Фамилия', width: 150},
        {field: 'phone', headerName: 'Номер телефона', width: 200},
        {field: 'category', headerName: 'Выбранная услуга', width: 300},
        {
            field: 'documents', 
            headerName: 'Собранные документы', 
            width: 330,
            renderCell: (params: GridRenderCellParams) => {
                let label = ' ';
                params?.value.map((item: any) => { label = label + (item + ', ') })
                return <Chip label={label} />;
            }
        },
        {
            field: 'documentsStatus', 
            headerName: 'Статус обработки заявки', 
            width: 300,
            align: 'right',
            headerAlign: 'right',
            renderCell: (params: GridRenderCellParams) => {
                const documentsCount = params.row.documents;
                if(documentsCount.length === 0) {
                    return <Alert style={{width: 170, paddingTop: 0, paddingBottom: 0}} severity="error">Отказано</Alert>;
                } else if (documentsCount.length === params.value) {
                    return <Alert style={{width: 170, paddingTop: 0, paddingBottom: 0}} severity="success">Обработано</Alert>;
                } else {
                    return <Alert style={{width: 170, paddingTop: 0, paddingBottom: 0}} severity="warning">Не обработано</Alert>;
                }

            }
        }
    ]

    return (
        <Box sx={{ height: '85vh', width: '100%' }}>
        <DataGrid
            rows={applications}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
        />
        </Box>
    )
}

export default Applications;