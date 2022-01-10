<template>
  <div>
    <Navbar />
    <Banner />
    <About />
    <Skills />
    <Portfolio />
    <Publisher />
    <Certificate />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Portfolio from '../components/Portfolio.vue'
import Publisher from '../components/Publisher.vue'
import Certificate from '../components/Certificate.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend ({
  name: 'Home',
  components: {
    Navbar,
    Banner,
    About,
    Skills,
    Portfolio,
    Publisher,
    Certificate,
    Footer
  }
})
</script>