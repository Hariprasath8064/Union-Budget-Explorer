<template>
    <div class="graphs-container">
      <SchemeDetails />
      <div class="graph-container" id="radarGraph">
        <canvas ref="radarChart"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import { createRadarChart } from '@/components/Global/ChartUtils';
  import SchemeDetails from '@/components/Schemes/SchemeDetails.vue';
  import axios from 'axios';
  
  export default {
    components: {
    SchemeDetails,
},
    data() {
      return {
        radarChart: null,
      };
    },
    async mounted() {
      await this.$nextTick();
      await this.fetchGraphData();
    },
    methods: {
      async fetchGraphData() {
        try {
          const graphResponse = await axios.get('http://localhost:5000/scheme');
          const graphData = graphResponse.data;
  
          const schemeNames = graphData.map(item => item.scheme_name);
          const allocatedAmounts = graphData.map(item => item.allocated_amount);
  
          this.radarChart = createRadarChart(
          schemeNames,
          allocatedAmounts,
          this.$refs.radarChart,
          'rgba(139, 69, 19, 0.5)', 
          'rgba(139, 69, 19, 1)',    
          'Scheme vs Allocated Amounts vs Years',
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
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    width: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
  }
  
  #radarGraph {
    width: 40%;
    height: auto;
  }
  </style>
  