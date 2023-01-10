import React from 'react';
import { Box, TextField, FormControl, InputLabel, Select, SelectChangeEvent, MenuItem, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { dictionaryCategory } from '../types/Application';
import { useRouter } from 'next/router';

export const Create = () => {
    const [age, setAge] = React.useState('');
    const router = useRouter();
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const handleChangeDate = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

    const handlerCreate = () => {
        router.push('/')
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ height: '85vh', width: '100%' }}>
            <h1>Создание заявки</h1>
            <p style={{ marginBottom: 20 }}>Заполните поля ниже чтобы создать <br/>заявку на получение выбранной услуги</p>
            <TextField style={{ width: '100%', marginBottom: 20 }} id="outlined-basic" label="Имя" variant="outlined" />
            <TextField style={{ width: '100%', marginBottom: 20 }} id="outlined-basic" label="Фамилия" variant="outlined" />
            <TextField style={{ width: '100%', marginBottom: 20 }} id="outlined-basic" label="Номер Телефона" variant="outlined" />
            <FormControl style={{marginBottom: 20}} fullWidth>
                <DesktopDatePicker
                    label="Дата рождения"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChangeDate}
                    renderInput={(params) => <TextField {...params} />}
                />
            </FormControl>
            <FormControl style={{marginBottom: 20}} fullWidth>
                <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Категория"
                    onChange={handleChange}
                >
                    {
                        dictionaryCategory.map((item, index) => {
                            return <MenuItem value={index}>{item}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <FormControl style={{marginBottom: 20}} fullWidth>
                <Button variant="outlined" component="label" style={{padding: 15}}>
                    Загрузить документы
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
            </FormControl>

            <FormControl fullWidth>
                <Button onClick={handlerCreate} variant="contained" component="label" style={{padding: 15}}>
                    Создать заявку
                </Button>
            </FormControl>
        </Box>
        </LocalizationProvider>
    )
}

export default Create;