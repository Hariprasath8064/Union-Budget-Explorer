<template>
  <div class="update-main-body">
    <h2>Update</h2>
    <Scheme style="flex: 1; margin-right: 10px;" />
    <div class="panel-body">
      <Expense style="margin-bottom: 10px;" />
      <Revenue />
    </div>
  </div>
  <div class="delete-main-body">
    <h2>Delete</h2>
    <div class="panel-body">
      <Delete />
    </div>
  </div>
</template>

<script>
import Scheme from '@/components/Admin/Updatez/Scheme.vue';
import Expense from '@/components/Admin/Updatez/Expense.vue';
import Revenue from '@/components/Admin/Updatez/Revenue.vue';
import Delete from '@/components/Admin/Delete/Delete.vue'

export default {
  components: {
    Scheme,
    Expense,
    Revenue,
    Delete
  },
};
</script>

<style scoped>
h2{
  margin-right: 50px;
}
.update-main-body {
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
  align-items: stretch; 
  max-width: 1100px;
  margin: 20px;
}

.delete-main-body {
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
  align-items: stretch; 
  max-width: 1100px;
  margin: 20px;
}
.panel-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
