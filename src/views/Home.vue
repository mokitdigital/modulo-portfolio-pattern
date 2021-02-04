<template>
  <div class="home">
    <Header id="header" />
    <Photos id="album" />
    <Contact id="contact" />
    <Button />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Index.vue'
import Photos from '@/components/Photos/Index.vue'
import Contact from '@/components/Contact/Index.vue'
import Footer from '@/components/Footer/Index.vue'
import Button from '@components/ButtonTop/Index.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Photos,
    Contact,
    Footer,
    Button
  }
}
</script>
