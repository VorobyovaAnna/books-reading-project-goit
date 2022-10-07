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
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import moment from 'moment';

import 'moment/locale/uk';
import { Line } from 'react-chartjs-2';

import { Container, GraphContainer } from './ProgressChart.styled';

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
  Legend,
  zoomPlugin
);

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
    transitions: {
      zoom: {
        animation: {
          duration: 1000,
          easing: 'easeOutCubic',
        },
      },
    },
    zoom: {
      limits: {
        min: 0,
        max: 100,
      },
      zoom: {
        wheel: {
          enabled: true,
          speed: 0.02,
        },
        pinch: {
          enabled: true,
        },
        mode: 'xy',
      },
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

  const statisticsId = trainings?.training[0]?.statistics;

  const stats = useGetStatisticsByIdQuery(statisticsId, {
    skip: !statisticsId,
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
