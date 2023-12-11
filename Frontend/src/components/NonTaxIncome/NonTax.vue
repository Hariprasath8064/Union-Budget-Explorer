<template>
  <div class="nontax-page">
    <HeaderSection />
    <ContentSection :tableData="tableData1" />
  </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import ContentSection from './ContentSection.vue';
import axios from 'axios';

export default {
  components: {
    HeaderSection,
    ContentSection,
  },
  data() {
    return {
      tableData1: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/nontaxrevenue');
        this.tableData1 = response.data;
        console.log(this.tableData1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<style>
</style>
