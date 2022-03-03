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
        { linkSosmed: 'https://www.linkedin.com/in/fadhilahdwiananda/', imgSosmed: 'ic_linkedin.svg' },
        { linkSosmed: 'https://github.com/fadhildwia', imgSosmed: 'ic_github.svg' },
        { linkSosmed: 'https://www.instagram.com/fadhilahdwia/', imgSosmed: 'ic_instagram.svg' },
      ],
      dataServices: [
        { img: 'ic_coding.svg', title: 'Web Developer', desc: 'Landing Page, E-commerce' },
        { img: 'ic_coding.svg', title: 'Web Developer', desc: 'Landing Page, E-commerce' },
        { img: 'ic_coding.svg', title: 'Web Developer', desc: 'Landing Page, E-commerce' },
        { img: 'ic_coding.svg', title: 'Web Developer', desc: 'Landing Page, E-commerce' },
      ],
      dataProfile: 'img_profile.png',
      dataSkills: [
        { imgSkill: 'ic_figma.png', label: 'Figma' },
        { imgSkill: 'ic_html.png', label: 'HTML' },
        { imgSkill: 'ic_jsedit.png', label: 'Javascript' },
        { imgSkill: 'ic_react.png', label: 'React JS' },
        { imgSkill: 'ic_git.png', label: 'Git' },
        { imgSkill: 'ic_nodejs.png', label: 'Node JS' },
        { imgSkill: 'ic_python.png', label: 'Python' },
      ],
      dataPortfolio: [
        { link: 'https://webtitipinaja.000webhostapp.com/', img: 'ss_web_titipaja.png', title: 'Website Titipin Aja', desc: 'Website berbasis PHP Native yang dibuat menjadi web E-Commerce untuk titip jual sepatu atau titip beli sepatu.' },
        { link: 'https://github.com/fadhildwia/Web-analisis-sentimen-svm', img: 'ss_web_klasification.png', title: 'Website Titipin Aja', desc: 'Website yang menggunakan Flask dari bahasa pemrograman Python dengan fungsi untuk mencari tau sentimen masyarakat terhadap suatu provider internet menggunakan kecerdasan buatan dari algoritma Support Vector Machine.' },
        { link: 'https://fadhildwia.github.io/landing-page-covid19/', img: 'ss_web_covid.png', title: 'Website Landing Page Covid-19', desc: 'Website yang menggunakan full CSS dan JavaScript yang dibuat untuk menghimbau kepada masyarakat tentang bahaya Covid-19.' },
        { link: 'https://react-movie-app-1f6e0.web.app/', img: 'ss_web_movie.png', title: 'Website Kumpulan Movie', desc: 'Website yang menggunakan react dan API dari the movie db yang di deploy dengan firebase.' },
      ]
    }
  }
})
</script>