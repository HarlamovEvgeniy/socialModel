import React, { useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useAtom } from 'jotai';
import { applicationsAtom } from '../store/applications';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Fond = () => {
    const [applications] = useAtom(applicationsAtom);
    const investmentFund = 30000000;
    const investmentCategories: Array<any> = [];
    
    const getRefunds = () => {
        applications.map((item) => {
            if(item.status && !investmentCategories[item.id]) {
                investmentCategories[item.id] = {
                    name: item.category.name,
                    price: item.category.price
                }
            }

            if(item.status && investmentCategories[item.id]) {
                investmentCategories[item.id].price += item.category.price;
            }
        });
        console.log(investmentCategories);
    }

    const getLabels = () => {
        const labels: Array<string> = [];
        investmentCategories.map((item) => {
            labels.push(item.name)
        })

        console.log('Labels', labels);
        return labels;
    }

    const getData = () => {
        const values: Array<number> = [];
        investmentCategories.map((item) => {
            values.push(item.price)
        })
        
        console.log('Data', values);
        return values;
    }

    useEffect(() => {
        getRefunds();
    }, []);
    

    const data = {
        labels: [
            'Соцподдержка семей при рождении второго ребенка', 
            'Пособие инвалидам 1-2 группы', 
            'Субсидии и МСП по оплате ЖКУ', 
            'Материнский капитал', 
            'Единовременное пособие при рождении ребенка',
            'Оставшийся фонд'
        ],
        datasets: [
          {
            label: '# of Votes',
            data: [1293902, 1920303, 2938438, 2030419, 2290394, 1022000],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div className="fond">
            <Pie options={{responsive: true}} data={data} />;
        </div>
    )
}

export default Fond;