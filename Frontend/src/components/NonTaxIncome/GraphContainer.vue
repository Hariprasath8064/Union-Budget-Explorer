<template>
  <div class="graphs-container">
    <div class="graph-container">
      <canvas ref="pieChart" id="pieChart"></canvas>
    </div>

    <div class="graph-container">
      <canvas ref="barChart2"></canvas>
    </div>
  </div>
</template>

<script>
import { createPieChart, createBarChart } from '@/components/Global/ChartUtils';
import axios from 'axios';

export default {
  data() {
    return {
      pieChart: null,
      chart2: null,
    };
  },
  async mounted() {
    await this.fetchGraphData();
  },

  methods: {
    async fetchGraphData() {
      try {
        const graphResponse = await axios.get('http://localhost:5000/nontaxrevenue');
        const graphData = graphResponse.data;

        // Extract source and amount data for the pie chart
        const sourceDataPie = graphData.map(item => item.source_name);
        const sourceAmountDataPie = graphData.map(item => item.amount);

        // Create a pie chart using Chart.js
        this.pieChart = createPieChart(
          sourceDataPie,
          sourceAmountDataPie,
          this.$refs.pieChart,
          ['#F2AB6D', '#9F8F68', '#AAC8E5', '#D77C75', '#A4BD98', '#D9C7A4', '#8E8B8B', '#B7B591'],
          50
        );

        // Group data by source_name and sum the amounts
        const groupedSourceData = graphData.reduce((result, item) => {
          const sourceName = item.source_name;

          if (!result[sourceName]) {
            result[sourceName] = 0;
          }

          result[sourceName] += item.amount;

          return result;
        }, {});

        // Extract source and amount data for the second graph
        const sourceData = Object.keys(groupedSourceData);
        const sourceAmountData = Object.values(groupedSourceData);

        // Create a bar chart using Chart.js for the second graph
        this.chart2 = createBarChart(
        sourceData,
        sourceAmountData,
        this.$refs.barChart2,
        'rgba(46, 139, 87, 0.5)',
        'rgba(46, 139, 87, 1)',
        'Source-Distribution (in Crs)'
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
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
}

#pieChart {
  width: 60%;
  height: auto;}
</style>
