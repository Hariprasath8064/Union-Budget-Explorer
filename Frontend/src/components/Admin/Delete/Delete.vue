<template>
  <div>
    <Scheme />
    <div class="spacing"></div>
    <Expense />
    <div class="spacing"></div>
    <Revenue />
  </div>
</template>

<script>
import Scheme from '@/components/Admin/Delete/DScheme.vue';
import Expense from '@/components/Admin/Delete/DExpense.vue';
import Revenue from '@/components/Admin/Delete/DRevenue.vue';

export default {
  components: {
    Scheme,
    Expense,
    Revenue,
  },
};
</script>

<style scoped>
.spacing {
  margin-bottom: 20px; /* Adjust the margin as needed */
}
</style>
