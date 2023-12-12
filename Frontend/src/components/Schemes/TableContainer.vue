<template>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Scheme ID</th>
            <th>Scheme Name</th>
            <th>Alloted Amt (in Crs)</th>
            <th>Start year</th>
            <th>End Year</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.revenue_id">
            <td>{{ item.scheme_id }}</td>
            <td>{{ item.scheme_name }}</td>
            <td>{{ item.allocated_amount }}</td>
            <td>{{ item.start_year }}</td>
            <td>{{ item.end_year }}</td>
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
    methods: {
    }
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
  