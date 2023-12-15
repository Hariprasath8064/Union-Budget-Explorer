<template>
    <section class="content-section">
      <GraphContainer />
      <TableContainer :tableData="tableData1" />
    </section>
  </template>
  
  <script>
  import GraphContainer from '@/components/Schemes/GraphContainer.vue';
  import TableContainer from '@/components/Schemes/TableContainer.vue';
  import axios from 'axios';
  
  export default {
    components: {
      GraphContainer,
      TableContainer,

    },
    data() {
      return {
        tableData1: [],
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/scheme');
        this.tableData1 = response.data;
        console.log('tableData1:', this.tableData1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    },
  };
  </script>
  
  <style scoped>
  .content-section {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  