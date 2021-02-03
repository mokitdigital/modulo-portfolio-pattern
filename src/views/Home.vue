<template>
  <div class="home">
    <Header />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Index.vue'
import Footer from '@/components/Footer/Index.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
