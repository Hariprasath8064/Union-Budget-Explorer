<!-- Your main component -->
<template>
    <section class="content-section">
      <GraphContainer />
      <SearchBar @search="handleSearch" />
      <TableContainer :tableData="tableData1" />
    </section>
  </template>
  
  <script>
  import GraphContainer from '@/components/Expenditure/GraphContainer.vue';
  import TableContainer from '@/components/Expenditure/TableContainer.vue';
  import SearchBar from '@/components/Expenditure/SearchBar.vue'; // Import the new SearchBar component
  import axios from 'axios';
  
  export default {
    components: {
      GraphContainer,
      TableContainer,
      SearchBar, // Register the SearchBar component
    },
    data() {
      return {
        tableData1: [],
        originalData: [],
      };
    },
    mounted() {
      this.fetchData();
      // Fetch data for other components as needed
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('http://localhost:5000/expenditure');
          this.tableData1 = response.data;
          this.originalData = response.data; // Save the original data
          console.log(this.tableData1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      handleSearch(data) {
        // Check if the received data is an empty string, fetch the original data if it is
        this.tableData1 = data === '' ? this.originalData : data;
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
  