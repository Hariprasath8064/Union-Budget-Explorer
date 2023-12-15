<template>
  <div class="main-frame">
    <Scheme />
    <Expense />
    <Revenue />
  </div>
</template>

<script>
import Scheme from '@/components/Admin/Insert/IScheme.vue';
import Expense from '@/components/Admin/Insert/IExpense.vue'
import Revenue from '@/components/Admin/Insert/IRevenue.vue'
export default {
  components: {
    Scheme,
    Expense,
    Revenue
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
