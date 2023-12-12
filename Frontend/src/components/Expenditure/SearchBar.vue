<!-- SearchBar.vue -->
<template>
  <input type="search" class="search" v-model="searchValue" placeholder="Sector" @input="searchSector">
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    searchSector() {
      if (this.searchValue.trim() === '') {
        this.$emit('search', ''); // Emit an event with an empty string
        return;
      }

      const parameter = {
        str: this.searchValue,
        present_players: this.selectedplayers, // Make sure to define selectedplayers or remove it if not used
      };

      axios.get(`http://localhost:5000/nontaxrevenue/${this.searchValue}`, { params: parameter })
        .then(response => {
          this.$emit('search', response.data); // Emit an event to update the table data
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.search {
  margin-top: 10px;
}
</style>
