<template>
  <div class="main-body">
    <div class="title">
      <h2>Revenue</h2>
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="RevenueID">Revenue ID:</label>
          <input type="text" id="RevenueID" v-model="formData.RevenueID" required />
        </div>
          
        <div class="column-group">
          <div class="form-group">
            <label for="Amount">Amount:</label>
            <input type="text" id="Amount" v-model="formData.Amount" required />
          </div>

          <div class="form-group">
            <label for="date">Date:</label>
            <input type="date" id="date" v-model="formData.Date" required />
          </div>
        </div>
  
        <div class="form-group">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        RevenueID: '',
        Amount: '',
        Date: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted with data:', this.formData);
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
