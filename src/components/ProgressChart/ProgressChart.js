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
import { Line } from 'react-chartjs-2';

import { Container, GraphContainer } from './ProgressChart.styled';

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

const labels = [
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  "П'ятниця",
  'Субота',
  'Неділя',
];

const data = {
  labels,
  type: 'shadowLine',
  datasets: [
    {
      label: 'План',
      data: [10, 10, 10, 10, 10, 10, 10],
      borderColor: '#091E3F',
      backgroundColor: '#091E3F',
      borderWidth: 2,
      borderJoinStyle: 'round',
      cubicInterpolationMode: 'default',
      tension: 0.4,
    },
    {
      label: 'Факт',
      data: [12, 7, 14, 13, 9, 6, 17],
      borderColor: ' #FF6B08',
      backgroundColor: '#FF6B08',
      borderWidth: 2,
      borderJoinStyle: 'round',
      cubicInterpolationMode: 'default',
      tension: 0.4,
    },
  ],
};

export default function ProgressChart() {
  return (
    <Container>
      <GraphContainer>
        <Line options={options} data={data} />;
      </GraphContainer>
    </Container>
  );
}
