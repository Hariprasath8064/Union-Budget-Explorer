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

     <div class="graphs-container">
       <div class="graph-container">
         <canvas ref="barChart1"></canvas>
       </div>

       <div class="graph-container">
         <canvas ref="barChart2"></canvas>
       </div>
     </div>

     <input type="search" class="search" v-model="searchValue" placeholder="Sector" @input="searchSector(searchValue)">

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
           <tr v-for="item in tableData1" :key="item.revenue_id">
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
import { Chart } from 'chart.js';

export default {
 data() {
   return {
     tableData1: [],

     searchValue: '',
   };
 },
 mounted() {
   this.fetchData();
   this.fetchGraphData1(); // Fetch data for the first bar graph
   this.fetchGraphData2(); // Fetch data for the second bar graph
 },
 methods: {
   async fetchData() {
     try {
       const response = await axios.get('http://localhost:5000/nontaxrevenue');
       this.tableData1 = response.data;
       console.log(this.tableData1); // Optional: Log the data to the console for verification
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

     axios.get(`http://localhost:5000/nontaxrevenue/${searchValue}`, { params: parameter })
       .then(response => {
         console.log(response.data);
         this.tableData1 = response.data; // Update the tableData1 with the filtered results
       })
       .catch(error => {
         console.log(error);
       });
   },
   async fetchGraphData1() {
     try {
       // Fetch data for the first bar graph
       const graphResponse = await axios.get('http://localhost:5000/nontaxrevenue');
       const graphData = graphResponse.data;

       // Extract sector and amount data for the first graph
       const sectorData = graphData.map(item => item.sector_name);
       const amountData = graphData.map(item => item.amount);

       // Create a bar chart using Chart.js for the first graph
       this.createBarChart(sectorData, amountData, 'barChart1', 'rgba(75, 192, 192, 0.5)', 'rgba(75, 192, 192, 1)', 'Sector-Distribution (in Crs)');

     } catch (error) {
       console.error('Error fetching graph data:', error);
     }
   },

   async fetchGraphData2() {
     try {
       // Fetch data for the second bar graph
       const graphResponse = await axios.get('http://localhost:5000/nontaxrevenue');
       this.tableData2 = graphResponse.data;
       console.log(this.tableData2); // Optional: Log the data to the console for verification

       // Extract source and amount data for the second graph
       const sourceData = this.tableData2.map(item => item.source_name);
       const amountData = this.tableData2.map(item => item.amount);

       // Create a bar chart using Chart.js for the second graph
       this.createBarChart(sourceData, amountData, 'barChart2', 'rgba(255, 99, 132, 0.5)', 'rgba(255, 99, 132, 1)', 'Source-Distrivution (in Crs)');

     } catch (error) {
       console.error('Error fetching graph data:', error);
     }
   },

   createBarChart(dataLabels, dataValues, chartRef, backgroundColor, borderColor, label) {
    const ctx = this.$refs[chartRef].getContext('2d');
    new Chart(ctx, {
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
      },
    });
  },

 },
};
</script>

<style>
.main-body {
 margin: 20px auto;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}

.content-section {
 margin-top: 30px;
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
}

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
 width: 48%; /* Adjust the width as needed, leaving some space for margin */
}

.header-section {
 text-align: center;
 max-width: 800px; /* Set max-width for the main body */
 width: 100%; /* Ensure the heading div occupies full width */
 margin: 0 auto; /* Center the heading div */
}

.header-section h1 {
 font-size: 2.5em;
 margin-bottom: 10px;
}

.header-section p {
 font-size: 1.2em;
 color: #555;
}

.content-section h2 {
 text-align: left;
 font-size: 2em;
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
