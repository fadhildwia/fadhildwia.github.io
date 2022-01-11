<template>
  <div class="title about" id="about">
    <h1>About</h1>
    <p class="quote">"Your time is limited, so don't waste it living someone else's life."</p>
    <p class="about-text">Saya adalah freshgraduate dari jurusan Informatika Universitas Amikom Yogyakarta. Saya mampu bekerja secara individu maupun berkolaborasi dengan tim, bertanggung jawab dan memiliki keinginan belajar yang tinggi. Saat ini saya berusia 21 Tahun, saya memiliki kemampuan yang dapat di andalkan yaitu Frontend Web Design, Frontend Developer, dan beberapa skill dalam bidang Analisis Data. </p>
    <div>
      <a href="../assets/CV-Fadhilah.pdf" class="btn-cv">Download CV</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'About'
})
</script>

<style lang="scss" scoped>
  .about {
    .quote {
      color: #d89216;
    }
    .about-text {
      margin: 0 7vw;
      line-height: 140%;
    }
    a {
      color: #fff;
    }
    .btn-cv {
      display: inline-block;
      background-color: orange;
      padding: 20px 30px;
      border-radius: 10px;
      &:hover {
        color: #000;
        box-shadow: 0px 0px 10px 5px rgba(194, 194, 194, 0.2);
        border-radius: 10px;
      }
    }
  }

  @media screen and (max-width: 920px) {
    .about {
      .quote {
        width: 80%;
      }
      .about-text {
        line-height: 130%;
      }
      .btn-cv {
        padding: 15px 25px;
      }
    }
  }

  @media screen and (max-width: 790px) {
    .about {
      .about-text {
        line-height: 115%;
      }
      .btn-cv {
        border-radius: 5px;
        padding: 10px 20px;
      }
    }
  }
</style>