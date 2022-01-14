<template>
  <div>
    <Navbar />
    <Banner
      :sosmed="dataSosmed"
      :imgProfile="dataProfile"
    />
    <About />
    <Skills :dataSkills="dataSkills" />
    <Portfolio />
    <!-- <Publisher /> -->
    <!-- <Certificate /> -->
    <!-- <Footer /> -->
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
    // Publisher,
    // Certificate,
    // Footer
  },
  data: function() {
    return {
      dataSosmed: [
        { linkSosmed: 'https://www.linkedin.com/in/fadhilahdwiananda/', imgSosmed: 'linkedin.svg' },
        { linkSosmed: 'https://github.com/fadhildwia', imgSosmed: 'github.svg' },
        { linkSosmed: 'https://www.instagram.com/fadhilahdwia/', imgSosmed: 'instagram.svg' },
      ],
      dataProfile: '2.png',
      dataSkills: [
        { imgSkill: 'figma.png', label: 'Figma' },
        { imgSkill: 'html.png', label: 'HTML' },
        { imgSkill: 'jsedit.png', label: 'Javascript' },
        // { imgSkill: 'react.png', label: 'React JS' },
        { imgSkill: 'git.png', label: 'Git' },
        { imgSkill: 'nodejs.png', label: 'Node JS' },
        { imgSkill: 'python.png', label: 'Python' },
      ],
    }
  }
})
</script>