<template>
  <div class="main-body">
    <section class="header-section">
      <h1>Non Tax Revenue 2023-24</h1>
      <p>
        Welcome to the comprehensive overview of the Union Government's non-tax revenues for the fiscal year 2023-24.
        This section highlights key sources, including returns on assets, interest, fees, fines, and more. The data is sourced from the Receipts Budget of 2023-24.
      </p>
    </section>

    <section class="content-section">
      <h2>Non Tax Revenue Distribution</h2>
      <h6>Figures are in ₹ Crores</h6>

      <div class="image-container">
        <img src="../../../images/Screenshot 2023-11-03 110413.png" alt="Non Tax Revenue Distribution">
      </div>

      <input type="search" class="search" v-model="searchValue" placeholder="Search" @input="searchSector(searchValue)">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Revenue ID</th>
              <th>Sector Name</th>
              <th>Source Name</th>
              <th>Amount (₹)</th>
              <th>Collection Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tableData" :key="item.revenue_id">
              <td>{{ item.revenue_id }}</td>
              <td>{{ item.sector_name }}</td>
              <td>{{ item.source_name }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.collection_date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tableData: [],
      searchValue: '',
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/nontaxrevenue');
        this.tableData = response.data;
        console.log(this.tableData); // Optional: Log the data to the console for verification
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    searchSector(searchValue) {
      if (searchValue.trim() === '') {
        this.fetchData(); // Fetch the original data when the search input is empty
        return;
      }

      const parameter = {
        str: searchValue,
        present_players: this.selectedplayers
      };

      axios.get(`http://localhost:5000/expenditure/${searchValue}`, { params: parameter })
        .then(response => {
          console.log(response.data);
          this.tableData = response.data; // Update the tableData with the filtered results
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.main-body {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header-section {
  text-align: center;
  max-width: 800px;
}

.header-section h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.header-section p {
  font-size: 1.2em;
  color: #555;
}

.content-section {
  margin-top: 30px;
}

.content-section h2 {
  text-align: left;
  font-size: 2em;
}

.content-section h6 {
  text-align: right;
  font-size: 0.8em;
  color: #888;
  margin-top: -15px;
}

.image-container {
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.table-container {
  margin-top: 20px;
  width: 100%; /* Set the table container to occupy the full width */
}

table {
  width: 100%; /* Set the table to occupy the full width */
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>