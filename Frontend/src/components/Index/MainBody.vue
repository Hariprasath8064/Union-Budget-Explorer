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
    </div>
  </template>
  
  <script>
import Chart from 'chart.js/auto';
import Navbar from '@/components/Global/Navbar.vue';
import DynamicTyping from '@/components/Index/DynamicTyping.vue';
import ExploreSection from '@/components/Index/ExploreSection.vue';
import { createPieChart } from '@/components/Global/ChartUtils'; 

export default {
  components: {
    Navbar,
    DynamicTyping,
    ExploreSection,
  },
  data() {
    return {
      pieChart1Data: [34, 15, 15, 4, 7, 17, 6, 2],
      pieChart2Data: [17, 20, 8, 7, 9, 18, 4, 8, 9],
      // Labels and background colors for Pie Chart 1
      pieChart1Labels: [
        'Borrowing and Liabilities',
        'Corporation tax',
        'Income tax',
        'Customs',
        'Union Excise Duties',
        'GST and other taxes',
        'Non-tax receipts',
        'Capital receipts',
      ],
      pieChart1Colors: [
        '#D9BF77',
        '#C68642',
        '#92A8D1',
        '#B04B45',
        '#789B73',
        '#BAA892',
        '#7C6A6A',
        '#9D9B7F',
      ],
      // Labels and background colors for Pie Chart 2
      pieChart2Labels: [
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
      pieChart2Colors: [
        '#F2AB6D',
        '#9F8F68',
        '#AAC8E5',
        '#D77C75',
        '#A4BD98',
        '#D9C7A4',
        '#8E8B8B',
        '#B7B591',
      ],
      cutout: 50,
    };
  },
  methods: {
    createPieChart() {
      const pieChartElement1 = this.$refs.pieChart1;
      createPieChart(
        this.pieChart1Labels,
        this.pieChart1Data,
        pieChartElement1,
        this.pieChart1Colors,
        'Income 23-24',
        this.cutout
      );

      const pieChartElement2 = this.$refs.pieChart2;
      createPieChart(
        this.pieChart2Labels,
        this.pieChart2Data,
        pieChartElement2,
        this.pieChart2Colors,
        'Expense 23-24',
        this.cutout
      );
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
  