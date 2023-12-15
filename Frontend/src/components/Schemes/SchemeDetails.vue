<template>
    <div>
      <div v-if="schemeNames.length > 0 && schemeDetails.length > 0" class="scheme-details-container">
        <h2>Scheme Details</h2>
        <ul>
          <li v-for="(name, index) in schemeNames" :key="index">
            <b>{{ name }}</b>: {{ schemeDetails[index] }}
          </li>
        </ul>
      </div>
      <p v-else>No data available</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        schemeNames: [],
        schemeDetails: [],
      };
    },
    mounted() {
      this.fetchSchemeData();
    },
    methods: {
      async fetchSchemeData() {
        try {
          const schemeResponse = await axios.get('http://localhost:5000/objective');
          const schemeData = schemeResponse.data;
  
          const schemeNames = schemeData.map(item => item.scheme_name);
          const schemeDetails = schemeData.map(item => item.objective_description);
  
          this.schemeDetails = schemeDetails;
          this.schemeNames = schemeNames;
          console.log(schemeNames, schemeDetails);
        } catch (error) {
          console.error('Error fetching Scheme details:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .scheme-details-container {
    text-align: left;
    padding: 30px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 30px;
  }
  
  li b {
    color: #2c3e50;
  }
  </style>
  