<template>
  <div class="container">
    <div class="choice">
      <label>
        <input type="radio" v-model="selectedOption" value="Insert" />
        <span class="radio-label"></span>
        Add Data
      </label>
      <label>
        <input type="radio" v-model="selectedOption" value="Update" />
        <span class="radio-label"></span>
        Modify Data
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
      selectedOption: 'Update',
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  gap: 20px; 
  margin-top: 20px;
}

.choice {
  display: flex;
  gap: 20px;
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
  font-size: 24px; 
}

.choice input[type="radio"]:checked + .radio-label {
  background-color: #007BFF; 
}

.selected-component {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
