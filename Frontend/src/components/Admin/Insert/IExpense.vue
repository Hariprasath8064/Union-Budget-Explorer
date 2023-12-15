<template>
  <div class="main-body">
    <div class="title">
      <h2>Expense</h2>
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="SectorName">Sector Name:</label>
          <input type="text" id="SectorName" v-model="formData.Sector_name" required />
        </div>

        <div class="form-group">
          <label for="CategoryName">Category name:</label>
          <input type="text" id="CategoryName" v-model="formData.Category_name" required />
        </div>
          
        <div class="column-group">
          <div class="form-group">
            <label for="sectorID">Sector ID:</label>
            <input type="text" id="sectorID" v-model="formData.Sector_id" required />
          </div>

          <div class="form-group">
            <label for="categoryID">Category ID:</label>
            <input type="text" id="categoryID" v-model="formData.Category_id" required />
          </div>
        </div>
  
        <div class="column-group">
          <div class="form-group">
            <label for="expID">Expense ID:</label>
            <input type="text" id="expID" v-model="formData.Expense_id" required />
          </div>
  
          <div class="form-group">
            <label for="ecpDate">Date:</label>
            <input type="date" id="expDate" v-model="formData.Expense_date" required />
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
        Category_id: '',
        Category_name: '',
        Expense_id: '',
        Sector_id: '',
        Sector_name: '',
        Amount: '',
        Expense_date: '',
      },
    };
  },
  methods: {
    async submitForm() {
      this.formData.Amount = parseInt(this.formData.Amount, 10);
      this.formData.Category_id = parseInt(this.formData.Category_id, 10);
      this.formData.Expense_id = parseInt(this.formData.Expense_id, 10);
      this.formData.Sector_id = parseInt(this.formData.Sector_id, 10);
      console.log('Form submitted with data:', this.formData);
      try {
        const response = await axios.post('http://localhost:5000/admin/insertexpense', this.formData)

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
