<template>
  <div class="explore">
    <h2>Explore Sections</h2>
    <p>
      Explore Union Budget 2023-24: Expenditure Budget, Receipts Budget, and Allocations for Major Schemes with data and interactive visualizations in the sections below.
    </p>

    <div class="cards-container">
      <router-link to="/nontax" class="card" tag="div" :class="['router-link']">
        <img src="../../../images/Screenshot 2023-11-02 235623.png" alt="Non Tax Income">
        <div class="name">Non Tax Income</div>
      </router-link>

      <router-link to="/expenditure" class="card" tag="div" :class="['router-link']">
        <img src="../../../images/Screenshot 2023-11-02 235631.png" alt="Expenditure">
        <div class="name">Expenditure</div>
      </router-link>

      <router-link to="/schemes" class="card" tag="div" :class="['router-link']">
        <img src="../../../images/Screenshot 2023-11-02 235638.png" alt="Schemes">
        <div class="name">Schemes</div>
      </router-link>
    </div>
  </div>
</template>
  
<script>
export default {
  methods: {
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
  text-decoration: none;
}

.router-link {
  text-decoration: none !important;
  color: inherit;
}
</style>
