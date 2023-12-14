<template>
  <div class="container">
    <div class="choice">
      <label>
        <input type="radio" v-model="selectedOption" value="update" />
        <span class="radio-label"></span>
        Update
      </label>
      <label>
        <input type="radio" v-model="selectedOption" value="insert" />
        <span class="radio-label"></span>
        Insert
      </label>
      <label>
        <input type="radio" v-model="selectedOption" value="delete" />
        <span class="radio-label"></span>
        Delete
      </label>
    </div>
    <div class="selected-component">
      <component :is="selectedOption" />
    </div>
  </div>
</template>

<script>
import Update from '@/components/Admin/Updatez/Update.vue';

export default {
  components: {
    Update,
  },
  data() {
    return {
      selectedOption: 'update', // Default to 'Update'
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 100px; 
}

.choice {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  gap: 20px; 
  width: 300px;
}

.choice >>> .radio-label {
  font-size: 44px;
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 2px solid #007BFF;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
}

/* Customize radio button appearance */
.choice input[type="radio"] {
  display: none; 
}

.choice label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 24px; /* Set your desired font size here */
}

.choice input[type="radio"]:checked + .radio-label {
  background-color: #007BFF; /* Customize the fill color when checked */
}

.selected-component {
  width: 100%;
}
</style>


