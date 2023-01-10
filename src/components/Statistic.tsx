import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { applicationsAtom, applicationsCompletedAtom, applicationsRefundsAtom } from '../store/applications';
import LinearProgressWithLabel from './LinearChart';

interface IChart {
    title: string, 
    value: number,
    chartValue?: number
}

export const Statistics = () => {
    const [applications] = useAtom(applicationsAtom);
    const [applicationsCompleted] = useAtom(applicationsCompletedAtom);
    const [applicationsRefunds] = useAtom(applicationsRefundsAtom);
    const [applicationsCounter, setApplicationCounter] = useState(0);
    const [applicationsCompletedCounter, setApplicationCompletedCounter] = useState(0);
    const [applicationsRefundsCounter, setApplicationRefundsCounter] = useState(0);

    if(!applications) {
        return <></>
    }

    const Chart: React.FC<IChart> = ({
        title, 
        value,
        chartValue = 0
    }) => {
        return (
            <div className='chart'>
                <div className="chart__pie">
                    <CircularProgress 
                        variant='determinate' 
                        value={chartValue} 
                        size={200}
                        className="chart__pie"
                    />
                    <LinearProgressWithLabel value={chartValue} />
                </div>
                
                <div className="chart__text">
                    <h3>{title}</h3>
                    <span>{value}</span>
                </div>
            </div>
        )
    }

    setTimeout(() => {
        setApplicationCounter(applicationsCounter + 1)
    }, 3000);

    setTimeout(() => {
        setApplicationCompletedCounter(applicationsCompletedCounter + 1)
    }, 2700);

    setTimeout(() => {
        setApplicationRefundsCounter(applicationsRefundsCounter + 1)
    }, 12700);

    return (
        <Box sx={{ height: '85vh', width: '100%' }}>
            <Stack spacing={2} direction="row" justifyContent={"center"}>
                <Chart
                    title={'Общее количество заявок'}
                    value={applications.length + 73 + applicationsCounter}
                    chartValue={100}
                />

                <Chart
                    title={'Количество обработанных заявок'}
                    value={(applications.length - applicationsCompleted + applicationsCompletedCounter) ?? 0}
                    chartValue={(applications.length - applicationsCompleted) ?? 0}
                />

                <Chart
                    title={'Количество отклоненных заявок'}
                    value={(applicationsRefunds + applicationsRefundsCounter) ?? 0}
                    chartValue={applicationsRefunds ?? 0}
                />
            </Stack>
        </Box>
    )
}

export default Statistics;