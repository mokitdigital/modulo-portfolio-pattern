<template>
  <div class="home">
    <Header />
    <Photos id="album" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Index.vue'
import Photos from '@/components/Photos/Index.vue'
import Contact from '@/components/Contact/Index.vue'
import Footer from '@/components/Footer/Index.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Photos,
    Contact,
    Footer
  }
}
</script>
