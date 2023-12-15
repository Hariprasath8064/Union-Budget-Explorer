<template>
  <div class="main-frame">
    <Scheme />
  </div>
</template>

<script>
import Scheme from '@/components/Admin/Insert/IScheme.vue';
export default {
  components: {
    Scheme,
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
