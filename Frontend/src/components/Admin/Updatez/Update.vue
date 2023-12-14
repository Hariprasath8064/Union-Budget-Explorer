<template>
  <div class="update-main-body">
    <Scheme style="flex: 1; margin-right: 10px;" />
    <div class="panel-body">
      <Expense style="margin-bottom: 10px;" />
      <Revenue />
    </div>
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
.update-main-body {
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
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
