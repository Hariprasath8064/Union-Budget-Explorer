<template>
    <Navbar />
    <RouterView></RouterView>
    <Footer />
</template>

<script>
import Navbar from '@/components/Global/Navbar.vue';
import Footer from '@/components/Global/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>