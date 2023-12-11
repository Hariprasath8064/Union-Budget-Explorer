<template>
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
  </template>
  
  <script>
  export default {
    props: {
      tableData: Array,
    },
  };
  </script>
  
  <style scoped>
    .table-container {
      margin-top: 20px;
      width: 100%;
    }
  
    table {
      width: 100%;
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
  