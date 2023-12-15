<template>
  <div class="main-body">
    <div class="title">
      <h2>Scheme</h2>
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="SchemeName">SchemeName:</label>
          <input type="text" id="SchemeName" v-model="formData.Scheme_name" required />
        </div>
          
        <div class="column-group">
          <div class="form-group">
            <label for="schemeID">SchemeID:</label>
            <input type="text" id="schemeID" v-model="formData.Scheme_id" required />
          </div>

          <div class="form-group">
            <label for="objectiveID">Objective ID:</label>
            <input type="text" id="objectiveID" v-model="formData.Objective_id" required />
          </div>
        </div>

        <div class="form-group">
          <label for="allocatedAmt">Allocated amt (in Crs):</label>
          <input type="text" id="allocatedAmt" v-model="formData.Allocated_amount" required />
        </div>

        <div class="column-group">
          <div class="form-group">
            <label for="AllocID">Allocation ID:</label>
            <input type="text" id="AllocID" v-model="formData.Allocation_id" required />
          </div>
  
          <div class="form-group">
            <label for="fiscalYear">Fiscal Year:</label>
            <input type="text" id="fiscalYear" v-model="formData.Fiscal_year" required />
          </div>
        </div>
  
        <div class="column-group">
          <div class="form-group">
            <label for="startYr">Start Year:</label>
            <input type="text" id="startYr" v-model="formData.Start_year" required />
          </div>
  
          <div class="form-group">
            <label for="endYr">End Year:</label>
            <input type="text" id="endYr" v-model="formData.End_year" required />
          </div>
        </div>
  
        <div class="form-group" style="display: block;">
          <label for="ObjDesc">Objective Description:</label>
          <textarea id="ObjDesc" v-model="formData.Objective_description" required></textarea>
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
        Scheme_id: '',
        Scheme_name: '',
        Start_year: '',
        End_year: '',
        Objective_description: '',
        Allocated_amount: '',
        Objective_id: '',
        Allocation_id: '',
        Fiscal_year: '',
      },
    };
  },
  methods: {
    async submitForm() {
      this.formData.Allocated_amount = parseInt(this.formData.Allocated_amount, 10);
      this.formData.Scheme_id = parseInt(this.formData.Scheme_id, 10);
      this.formData.Start_year = parseInt(this.formData.Start_year, 10);
      this.formData.End_year = parseInt(this.formData.End_year, 10);
      this.formData.Objective_id = parseInt(this.formData.Objective_id, 10);
      this.formData.Fiscal_year = parseInt(this.formData.Fiscal_year, 10);
      this.formData.Allocation_id = parseInt(this.formData.Allocation_id, 10);
      console.log('Form submitted with data:', this.formData);
      try {
        const response = await axios.post('http://localhost:5000/admin/insertscheme', this.formData)

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
