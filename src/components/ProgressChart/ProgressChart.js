import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  // LineController,
} from 'chart.js';
import moment from 'moment';
import 'moment/locale/uk';
import { Line } from 'react-chartjs-2';

import { Container, GraphContainer } from './ProgressChart.styled';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  useGetTrainingQuery,
  useGetStatisticsByIdQuery,
} from 'redux/RTKQuery/booksApi';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//Попытка сделать тень к линии чарта

// class Custom extends LineController {
//   draw() {
//     super.draw(arguments);

//     const ctx = this.chart.ctx;
//     let _stroke = ctx.stroke;
//     ctx.stroke = function () {
//       ctx.save();
//       ctx.shadowColor = "black";
//       ctx.shadowBlur = 10;
//       ctx.shadowOffsetX = 0;
//       ctx.shadowOffsetY = 4;
//       _stroke.apply(this, arguments);
//       ctx.restore();
//     };
//   }
// }

// Custom.id = "shadowLine";
// Custom.defaults = LineController.defaults;
// Chart.register(Custom);

const options = {
  type: 'shadowLine',
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Мій прогрес',
    },
  },
  scales: {
    y: {
      grid: { display: false },
      ticks: {
        beginAtZero: true,
      },
      min: 0,
    },
  },
  maintainAspectRatio: false,
};

export default function ProgressChart() {
  const { data: trainings } = useGetTrainingQuery();
  const statisticsId = trainings?.training?.map(item => {
    return item.statistics;
  });
  const stats = useGetStatisticsByIdQuery(statisticsId, {
    skip: statisticsId,
  });

  const planAmountOfPages = stats?.data?.statistic?.plan?.map(item => {
    return item.pages;
  });
  const realAmountOfPages = stats?.data?.statistic?.result?.map(item => {
    return item.pages;
  });

  const dates = stats?.data?.statistic?.plan?.map(item => {
    return moment(item.date).locale('uk').format('DD.MM/dd.');
  });

  const labels = dates;

  const data = {
    labels,
    datasets: [
      {
        label: 'План',
        data: planAmountOfPages,
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
        borderWidth: 2,
        borderJoinStyle: 'round',
        cubicInterpolationMode: 'default',
        tension: 0.4,
      },
      {
        label: 'Факт',
        data: realAmountOfPages,
        borderColor: ' #FF6B08',
        backgroundColor: '#FF6B08',
        borderWidth: 2,
        borderJoinStyle: 'round',
        cubicInterpolationMode: 'default',
        tension: 0.4,
      },
    ],
  };

  return (
    <Container>
      <GraphContainer>
        <Line options={options} data={data} />
      </GraphContainer>
    </Container>
  );
}
