<template>
    <div class="main-body">
      <h1 id="profile">Budget Profile</h1>
  
      <div class="columns">
        <div class="column-0">
          <h1>GDP Growth</h1>
          <p style="font-size: 72px; margin: 0px;">6.3%</p>
          <p>Q3 2023-24</p>
        </div>

        <div class="column--1">
          <div class="row--1">
            <h3 style="font-weight: lighter;">Rupees comes from</h3>
            <p style="font-size: 32px; margin: 0px; font-weight: bold;">₹42.3 trillion</p>
          </div>
          <div class="row--1">
            <h3 style="font-weight: lighter;">Rupees goes to</h3>
            <p style="font-size: 32px; margin: 0px; font-weight: bold;">₹45 trillion</p>
          </div>
          <div class="row--1">
            <div class="row--1">
              <h3 style="font-weight: lighter;">Current GDP</h3>
              <p style="font-size: 32px; margin: 0px; font-weight: bold;">$3.732 trillion</p>
            </div>
          </div>
        </div>
  
        <div class="column-1">
          <h2>Income 23-24</h2>
          <div class="pie-chart-container">
            <canvas ref="pieChart1" width="400" height="400"></canvas>
          </div>
        </div>
  
        <div class="column-2">
          <h2>Expense 23-24</h2>
          <div class="pie-chart-container">
            <canvas ref="pieChart2" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
  
      <DynamicTyping />
      <ExploreSection />
      <Footer />
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  import Navbar from '@/components/Global/Navbar.vue'
  import DynamicTyping from '@/components/Index/DynamicTyping.vue'
  import ExploreSection from '@/components/Index/ExploreSection.vue'
  import Footer from '@/components/Global/Footer.vue'
  
  export default {
    components: {
      Navbar,
      DynamicTyping,
      ExploreSection,
      Footer,
    },
    data() {
      return {
        pieChart1Data: [34, 15, 15, 4, 7, 17, 6, 2],
        pieChart2Data: [17, 20, 8, 7, 9, 18, 4, 8, 9],
      };
    },
    methods: {
      createPieChart() {
        // Create the first pie chart
        const pieChartElement1 = this.$refs.pieChart1;
        new Chart(pieChartElement1, {
          type: 'pie',
          data: {
            labels: [
              'Borrowing and Liabilities',
              'Corporation tax',
              'Income tax',
              'Customs',
              'Union Excise Duties',
              'GST and other taxes',
              'Non-tax receipts',
              'Capital receipts',
            ],
            datasets: [
              {
                data: this.pieChart1Data,
                backgroundColor: [
                  '#D9BF77',
                  '#C68642',
                  '#92A8D1',
                  '#B04B45',
                  '#789B73',
                  '#BAA892',
                  '#7C6A6A',
                  '#9D9B7F',
                ],
              },
            ],
          },
          options: {
            cutout: 50,
            plugins: {
              legend: {
                position: 'right',
              },
            },
            scales: {
              x: {
                ticks: {
                  rotation: -45,
                },
              },
            },
            responsive: false,
          },
        });
  
        // Create the second pie chart
        const pieChartElement2 = this.$refs.pieChart2;
        new Chart(pieChartElement2, {
          type: 'pie',
          data: {
            labels: [
              'Center Sector Scheme',
              'Interest Payments',
              'Defense',
              'Subsidies',
              'Finance commission & transfers',
              'States share of Taxes',
              'Pensions',
              'Other Expenditure',
              'Centrally sponsored Schemes',
            ],
            datasets: [
              {
                data: this.pieChart2Data,
                backgroundColor: [
                '#F2AB6D', // Soft Orange
                '#9F8F68', // Earthy Taupe
                '#AAC8E5', // Soft Periwinkle
                '#D77C75', // Earthy Salmon
                '#A4BD98', // Soft Sage
                '#D9C7A4', // Earthy Tan
                '#8E8B8B', // Earthy Gray
                '#B7B591', // Soft Khaki
                ],
              },
            ],
          },
          options: {
            cutout: 50,
            plugins: {
              legend: {
                position: 'right',
              },
            },
            scales: {
              x: {
                ticks: {
                  rotation: -45,
                },
              },
            },
            responsive: false,
          },
        });
      },
    },
    mounted() {
      this.createPieChart();
    },
  };
  </script>
  
  <style scoped>
  .columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
  }
  
  .pie-chart-container {
    margin-top: 20px;
    max-width: 600px;
    margin: auto;
  }

  .column-0 {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }

  .column--1 {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }

  .row--1{
    margin: 15px;
  }


  </style>
  