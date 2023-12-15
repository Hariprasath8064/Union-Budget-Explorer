<template>
  <div class="main-body">
    <div class="title">
      <h2>Scheme</h2>
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="SchemeID">SchemeID:</label>
          <input type="text" id="SchemeID" v-model="formData.Scheme_id" required />
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
        Scheme_id: '',
      },
    };
  },
  methods: {
    async submitForm() {
      this.formData.Scheme_id = parseInt(this.formData.Scheme_id, 10);
      console.log('Form submitted with data:', this.formData);
      try {
        const response = await axios.post(`http://localhost:5000/admin/deletescheme/${this.formData.Scheme_id}`, {params: this.Scheme_id});

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
