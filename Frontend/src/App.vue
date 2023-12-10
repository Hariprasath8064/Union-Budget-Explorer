<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Global/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

/* Add any global styles here */
</style>
