<template>
  <div class="graphs-container">
    <div class="graph-container" id="bar1">
      <canvas ref="barChart1"></canvas>
    </div>

    <div class="graph-container" id="bar2">
      <p>Source-Distribution (in Crs)</p>
      <canvas ref="barChart2"></canvas>
    </div>
  </div>
</template>

<script>
import { createBarChart } from '@/components/Global/ChartUtils'; // Adjust the import based on your actual file structure
import axios from 'axios';

export default {
  data() {
    return {
      chart1: null,
      chart2: null,
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

      // Extract sector and amount data for the first graph
      const sectorData = graphData.map(item => item.sector_name);
      const amountData = graphData.map(item => item.amount);

      // Create a bar chart using Chart.js for the first graph
      this.chart1 = createBarChart(sectorData, amountData, this.$refs.barChart1, 'rgba(240, 128, 128, 0.5)', 'rgba(240, 128, 128, 1)', 'Sector-Distribution (in Crs)');

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
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 99, 132, 1)',
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
  width: 100%;
  justify-content: space-between;
  margin-right: 50px;
  margin-left: 50px;
}

.graph-container {
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 5px;
}

#bar1 canvas,
#bar2 canvas {
  width: 900px;
  height: auto;
}
</style>
