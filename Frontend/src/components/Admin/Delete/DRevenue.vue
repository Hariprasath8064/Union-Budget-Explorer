<template>
  <div class="main-body">
    <div class="title">
      <h2>Revenue</h2>
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="RevenueID">Revenue ID:</label>
          <input type="text" id="RevenueID" v-model="formData.Revenue_id" required />
        </div>
        <div class="form-group">
          <button type="submit">Delete</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        Revenue_id: '',
      },
    };
  },
  methods: {
    async submitForm() {
      this.formData.Revenue_id = parseInt(this.formData.Revenue_id, 10);
      console.log('Form submitted with data:', this.formData);
      try {
        const response = await axios.post(`http://localhost:5000/admin/deleterevenue/${this.formData.Revenue_id}`, {params: this.Revenue_id});

        console.log('API response:', response.status, response.statusText, response.data);

      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  },
};
</script>

<style scoped>

.main-body{
  border-radius: 10px;
  border: 1px solid #2c3e50;
  padding: 15px;
  max-width: 400px;
}
.form-container {
  max-width: 400px;
}

.column-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

label {
  margin-bottom: 0.5em;
}

input,
textarea {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  height: 100px;
}

button {
  padding: 0.5em 1em;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
