import React from 'react';
import { useAtom } from 'jotai';
import { Box } from '@mui/material';
import { applicationsAtom, applicationsCompletedAtom, applicationsRefundsAtom } from '../store/applications';
import { faker } from '@faker-js/faker'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Статистика фонда',
      },
    },
};


export const Statistics = () => {
    const [applications] = useAtom(applicationsAtom);
    const [applicationsCompleted] = useAtom(applicationsCompletedAtom);
    const [applicationsRefunds] = useAtom(applicationsRefundsAtom);

    if(!applications) {
        return <></>
    }

    const labels = [
      'Соцпод. семей при рожд. втор. ребенка', 
      'Пособие инвалидам 1-2 группы', 
      'Субсидии и МСП по оплате ЖКУ', 
      'Материнский капитал', 
      'Единовременное пособие при рождении ребенка',
      'Оставшийся фонд'
    ];

    const data = {
        labels,
        datasets: [
          {
            label: 'Сумма затрат',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Процент бюджета',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
    };

    return (
        <Box sx={{ height: '85vh', width: '100%' }}>
            <Bar options={options} data={data} />
        </Box>
    )
}

export default Statistics;