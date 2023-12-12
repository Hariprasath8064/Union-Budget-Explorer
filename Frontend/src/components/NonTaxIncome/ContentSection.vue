<template>
  <section class="content-section">
    <GraphContainer />
    <input type="search" class="search" v-model="searchValue" placeholder="Sector" @input="searchSector">
    <TableContainer :tableData="tableData1" />
  </section>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import GraphContainer from './GraphContainer.vue';
import TableContainer from './TableContainer.vue';
import axios from 'axios';

export default {
  components: {
    HeaderSection,
    GraphContainer,
    TableContainer,
  },
  data() {
    return {
      tableData1: [],
      originalData: [],
      searchValue: '',
    };
  },
  mounted() {
    this.fetchData();
    // Fetch data for other components as needed
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/nontaxrevenue');
        this.tableData1 = response.data;
        this.originalData = response.data; // Save the original data
        console.log(this.tableData1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    searchSector() {
      if (this.searchValue.trim() === '') {
        this.fetchData(); // Fetch the original data when the search input is empty
        return;
      }

      const parameter = {
        str: this.searchValue,
        present_players: this.selectedplayers, // Make sure to define selectedplayers or remove it if not used
      };

      axios.get(`http://localhost:5000/nontaxrevenue/${this.searchValue}`, { params: parameter })
        .then(response => {
          console.log(response.data);
          this.tableData1 = response.data; // Update the tableData1 with the filtered results
        })
        .catch(error => {
          console.log(error);
        });
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

.search {
  margin-top: 10px;
}
</style>
