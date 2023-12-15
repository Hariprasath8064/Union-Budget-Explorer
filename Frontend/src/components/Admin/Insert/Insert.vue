<template>
  <div class="main-frame">
    <Scheme />
    <Expense />
  </div>
</template>

<script>
import Scheme from '@/components/Admin/Insert/IScheme.vue';
import Expense from '@/components/Admin/Insert/IExpense.vue'
export default {
  components: {
    Scheme,
    Expense
  },
};
</script>

<style scoped>
.main-frame{
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
