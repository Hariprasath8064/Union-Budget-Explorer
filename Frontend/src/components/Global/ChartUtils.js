import { Chart } from 'chart.js';

// Function to create a bar chart
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
        duration: 1000,
        easing: 'easeInOutQuad',
      },
    },
  });
}

// Function to create a pie chart
export function createPieChart(dataLabels, dataValues, chartRef, backgroundColor, cutout) {
  const ctx = chartRef.getContext('2d');
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: dataLabels,
      datasets: [{
        data: dataValues,
        backgroundColor: backgroundColor,
        borderColor: '#fff',
        borderWidth: 1,
      }],
    },
    options: {
      cutout: cutout,
      plugins: {
        legend: {
          position: 'right',
        },
      },
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeInOutQuad',
        animateRotate: true,
        animateScale: true,
        onProgress: (animation) => {
          // This function is called during the animation
          chartRef.style.transition = 'transform none'; // Disable default CSS transition
          const angle = animation.chart.options.rotation; // Get the current rotation angle
          const rotation = angle % (2 * Math.PI); // Normalize the rotation angle
          chartRef.style.transform = `rotate(-${rotation}rad)`; // Apply the rotation using CSS transform
        },
      },
    },
  });
}

// Function to create a radar chart
export function createRadarChart(labels, dataValues, chartRef, backgroundColor, borderColor, label, fontSize) {
  const ctx = chartRef.getContext('2d');
  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: dataValues,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      }],
    },
    options: {
      animation: {
        duration: 1000,
        easing: 'easeInOutQuad',
      },
    },
  });
}