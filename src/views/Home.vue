<template>
  <div>
    <Navbar />
    <Banner
      :sosmed="dataSosmed"
      :imgProfile="dataProfile"
    />
    <MyServices :dataServices="dataServices" />
    <Skills :dataSkills="dataSkills" />
    <Portfolio :dataPortfolio="dataPortfolio" />
    <Publisher />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import MyServices from '../components/MyServices.vue'
import Skills from '../components/Skills.vue'
import Portfolio from '../components/Portfolio.vue'
import Publisher from '../components/Publisher.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend ({
  name: 'Home',
  components: {
    Navbar,
    Banner,
    MyServices,
    Skills,
    Portfolio,
    Publisher,
    Footer
  },
  data: function() {
    return {
      dataSosmed: [
        { linkSosmed: 'https://www.linkedin.com/in/fadhilahdwiananda/', imgSosmed: 'linkedin.svg' },
        { linkSosmed: 'https://github.com/fadhildwia', imgSosmed: 'github.svg' },
        { linkSosmed: 'https://www.instagram.com/fadhilahdwia/', imgSosmed: 'instagram.svg' },
      ],
      dataServices: [
        { img: 'coding.svg', title: 'Web Developer', desc: 'Landing Page, E-commerce' },
        { img: 'coding.svg', title: 'Web Developer', desc: 'Landing Page, E-commerce' },
        { img: 'coding.svg', title: 'Web Developer', desc: 'Landing Page, E-commerce' },
        { img: 'coding.svg', title: 'Web Developer', desc: 'Landing Page, E-commerce' },
      ],
      dataProfile: '2.png',
      dataSkills: [
        { imgSkill: 'figma.png', label: 'Figma' },
        { imgSkill: 'html.png', label: 'HTML' },
        { imgSkill: 'jsedit.png', label: 'Javascript' },
        { imgSkill: 'react.png', label: 'React JS' },
        { imgSkill: 'git.png', label: 'Git' },
        { imgSkill: 'nodejs.png', label: 'Node JS' },
        { imgSkill: 'python.png', label: 'Python' },
      ],
      dataPortfolio: [
        { link: 'https://webtitipinaja.000webhostapp.com/', img: 'web-titipinaja.png', title: 'Website Titipin Aja', desc: 'Website berbasis PHP Native yang dibuat menjadi web E-Commerce untuk titip jual sepatu atau titip beli sepatu.' },
        { link: 'https://github.com/fadhildwia/Web-analisis-sentimen-svm', img: 'web-analysis-sentiment.png', title: 'Website Titipin Aja', desc: 'Website yang menggunakan Flask dari bahasa pemrograman Python dengan fungsi untuk mencari tau sentimen masyarakat terhadap suatu provider internet menggunakan kecerdasan buatan dari algoritma Support Vector Machine.' },
        { link: 'https://fadhildwia.github.io/landing-page-covid19/', img: 'web-landingpage-covid.png', title: 'Website Landing Page Covid-19', desc: 'Website yang menggunakan full CSS dan JavaScript yang dibuat untuk menghimbau kepada masyarakat tentang bahaya Covid-19.' },
        { link: 'https://react-movie-app-1f6e0.web.app/', img: 'web-movie.png', title: 'Website Kumpulan Movie', desc: 'Website yang menggunakan react dan API dari the movie db yang di deploy dengan firebase.' },
      ]
    }
  }
})
</script>