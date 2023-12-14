<template>
  <Scheme />
  <Expense />
  <Revenue />
</template>

<script>
import Scheme from '@/components/Admin/Delete/DScheme.vue'
import Expense from '@/components/Admin/Delete/DExpense.vue'
import Revenue from '@/components/Admin/Delete/DRevenue.vue'
  export default {
    components: {
      Scheme,
      Expense,
      Revenue
    }
  }
</script>