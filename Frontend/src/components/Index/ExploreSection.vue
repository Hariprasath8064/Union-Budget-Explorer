<template>
    <div class="explore">
      <h2>Explore Sections</h2>
      <p>
        Explore Union Budget 2023-24: Expenditure Budget, Receipts Budget, and Allocations for Major Schemes with data and interactive visualizations in the sections below.
      </p>
  
      <div class="cards-container">
        <div class="card" @click="navigateTo('/your-first-link')">
          <img src="../../../images/Screenshot 2023-11-02 235623.png">
          <div class="name">Non Tax Income</div>
        </div>
  
        <div class="card" @click="navigateTo('/your-second-link')">
          <img src="../../../images/Screenshot 2023-11-02 235631.png">
          <div class="name">Budget Trends</div>
        </div>
  
        <div class="card" @click="navigateTo('/your-third-link')">
          <img src="../../../images/Screenshot 2023-11-02 235638.png">
          <div class="name">Schemes</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(link) {
        window.location.href = link;
      },
    },
  };
  </script>
  
  <style scoped>
    .explore {
      text-align: center;
      margin-top: 50px;
      background-color: #e3e4df;
      padding: 50px;
    }
  
    .explore h2 {
      font-size: 30px;
      color: #000;
    }
  
    .explore p {
      color: #000;
      padding-left: 130px;
      padding-right: 130px;
    }
  
    .cards-container {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
    }
  
    .card {
      flex: 0 0 25%;
      text-align: center;
      cursor: pointer;
    }
  
    .card img {
      width: 100%;
      height: auto;
    }
  
    .card .name {
      background-color: #c3d9f0;
      padding: 10px;
      transition: background-color 0.3s ease;
    }
  
    .card:hover .name {
      background-color: #ffffff;
    }
  </style>
  