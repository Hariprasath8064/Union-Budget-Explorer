<template>
  <div class="graphs-container">
    <div class="graph-container">
      <canvas ref="barChart1"></canvas>
    </div>

    <div class="graph-container">
      <canvas ref="barChart2"></canvas>
    </div>
  </div>
</template>

<script>
import { createBarChart } from './ChartUtils.js';
import axios from 'axios';

export default {
  data() {
    return {
      chart1: null,
      chart2: null,
    };
  },
  mounted() {
    this.fetchGraphData();
  },
  methods: {
    async fetchGraphData() {
      try {
        const graphResponse = await axios.get('http://localhost:5000/nontaxrevenue');
        const graphData = graphResponse.data;

        // Extract sector and amount data for the first graph
        const sectorData = graphData.map(item => item.sector_name);
        const amountData = graphData.map(item => item.amount);

        // Create a bar chart using Chart.js for the first graph
        this.chart1 = createBarChart(sectorData, amountData, this.$refs.barChart1, 'rgba(75, 192, 192, 0.5)', 'rgba(75, 192, 192, 1)', 'Sector-Distribution (in Crs)');

        // Extract source and amount data for the second graph
        const sourceData = graphData.map(item => item.source_name);
        const sourceAmountData = graphData.map(item => item.amount);

        // Create a bar chart using Chart.js for the second graph
        this.chart2 = createBarChart(sourceData, sourceAmountData, this.$refs.barChart2, 'rgba(255, 99, 132, 0.5)', 'rgba(255, 99, 132, 1)', 'Source-Distribution (in Crs)');
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
}
</style>
