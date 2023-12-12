<template>
  <div class="graphs-container">
    <div class="graph-container" id="bar1">
      <canvas ref="barChart1"></canvas>
    </div>

    <div class="graph-container" id="pie">
      <p class="chart-title">Source Distribution (in Crs)</p>
      <canvas ref="pieChart"></canvas>
    </div>
  </div>
</template>

<script>
import { createBarChart, createPieChart } from '@/components/Global/ChartUtils';
import axios from 'axios';

export default {
  data() {
    return {
      chart1: null,
      pieChart: null,
    };
  },
  async mounted() {
    await this.$nextTick(); // Wait for the DOM to be updated
    await this.fetchGraphData();
  },
  methods: {
    async fetchGraphData() {
      try {
        const graphResponse = await axios.get('http://localhost:5000/expenditure');
        const graphData = graphResponse.data;

        // Extract sector and amount data for the bar chart
        const sectorData = graphData.map(item => item.sector_name);
        const amountData = graphData.map(item => item.amount);

        // Create a bar chart using ChartUtils.js
        this.chart1 = createBarChart(sectorData, amountData, this.$refs.barChart1, 'rgba(240, 128, 128, 0.5)', 'rgba(240, 128, 128, 1)', 'Sector Distribution (in Crs)');

        // Extract category and amount data for the pie chart
        const sourceDataPie = graphData.map(item => item.category_name);
        const sourceAmountDataPie = graphData.map(item => item.amount);

        console.log(sourceDataPie);
        console.log(sourceAmountDataPie);

        // Create a pie chart using ChartUtils.js
        this.pieChart = createPieChart(
          sourceDataPie,
          sourceAmountDataPie,
          this.$refs.pieChart,
          ['#F2AB6D', '#9F8F68', '#AAC8E5', '#D77C75', '#A4BD98', '#D9C7A4', '#8E8B8B', '#B7B591'], // Different colors for better visibility
          40
        );
      } catch (error) {
        console.error('Error fetching graph data:', error);
      }
    },
  },
};
</script>

<style scoped>
.graphs-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.graph-container {
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  width: 48%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#pieChart {
  width: 100%;
  height: auto;
}

.chart-title {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>
