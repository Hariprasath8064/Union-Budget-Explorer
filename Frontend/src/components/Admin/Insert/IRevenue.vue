<template>
  <div class="main-body">
    <div class="title">
      <h2>Revenue</h2>
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="SectorName">Sector Name:</label>
          <input type="text" id="SectorName" v-model="formData.Sector_name" required />
        </div>

        <div class="form-group">
          <label for="sourceName">Source name:</label>
          <input type="text" id="sourceName" v-model="formData.Source_name" required />
        </div>
          
        <div class="column-group">
          <div class="form-group">
            <label for="sectorID">Sector ID:</label>
            <input type="text" id="sectorID" v-model="formData.Sector_id" required />
          </div>

          <div class="form-group">
            <label for="categoryID">Revenue Source ID:</label>
            <input type="text" id="categoryID" v-model="formData.Revenue_Source_id" required />
          </div>
        </div>
  
        <div class="column-group">
          <div class="form-group">
            <label for="expID">Revenue ID:</label>
            <input type="text" id="expID" v-model="formData.Revenue_id" required />
          </div>
  
          <div class="form-group">
            <label for="ecpDate">Date:</label>
            <input type="date" id="expDate" v-model="formData.Collection_date" required />
          </div>
        </div>

        <div class="form-group">
            <label for="amount">Amount:</label>
            <input type="text" id="amount" v-model="formData.Amount" required />
          </div>
  
        <div class="form-group">
          <button type="submit">Update</button>
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
        Revenue_Source_id: '',
        Source_name: '',
        Revenue_id: '',
        Sector_id: '',
        Sector_name: '',
        Amount: '',
        Collection_date: '',
      },
    };
  },
  methods: {
    async submitForm() {
      this.formData.Amount = parseFloat(this.formData.Amount);
      this.formData.Revenue_id = parseInt(this.formData.Revenue_id, 10);
      this.formData.Revenue_Source_id = parseInt(this.formData.Revenue_Source_id, 10);
      this.formData.Sector_id = parseInt(this.formData.Sector_id, 10);
      console.log('Form submitted with data:', this.formData);
      try {
        const response = await axios.post('http://localhost:5000/admin/insertrevenue', this.formData)

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
