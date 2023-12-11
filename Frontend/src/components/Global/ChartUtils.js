import { Chart } from 'chart.js';

export function createBarChart(dataLabels, dataValues, chartRef, backgroundColor, borderColor, label) {
  const ctx = chartRef.getContext('2d');
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dataLabels,
      datasets: [{
        label: label,
        data: dataValues,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      animation: {
        duration: 1000, // Adjust the duration as needed
        easing: 'easeInOutQuad', // Experiment with different easing functions
      },
    },
  });
}
