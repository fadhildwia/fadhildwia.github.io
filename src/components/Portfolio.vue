<template>
  <div class="title project" id="project">
    <h1>Project</h1>
    <div class="items">
      <template v-for="(item, index) in dataPortfolio">
        <div class="items-project" :key="index">
          <a href="item.link"><img v-bind:src="imagePath(item.img)" alt="item.img" class=""></a>
          <h2>{{item.title}}</h2>
          <p>{{item.desc}}</p><br>
        </div>
      </template>
      <!-- <div class="items-project">
        <a href="https://webtitipinaja.000webhostapp.com/"><img src="../assets/web-titipinaja.png" alt="" class=""></a>
        <h2>Website Titipin Aja</h2>
        <p>Website berbasis PHP Native yang dibuat menjadi web E-Commerce untuk titip jual sepatu atau titip beli sepatu.</p><br>
      </div> -->
      <!-- <div class="items-project">
        <a href="https://github.com/fadhildwia/Web-analisis-sentimen-svm"><img src="../assets/web-analysis-sentiment.png" alt="" class=""></a>
        <h2>Website Analysis Sentimen Pengguna Provider Internet</h2>
        <p>Website yang menggunakan Flask dari bahasa pemrograman Python dengan fungsi untuk mencari tau sentimen masyarakat terhadap suatu provider internet menggunakan kecerdasan buatan dari algoritma Support Vector Machine. </p>
      </div>
      <div class="items-project">
        <a href="https://fadhildwia.github.io/landing-page-covid19/"><img src="../assets/web-landingpage-covid.PNG" alt="" class=""></a>
        <h2>Website Landing Page Covid-19</h2>
        <p>Website yang menggunakan full CSS dan JavaScript yang dibuat untuk menghimbau kepada masyarakat tentang bahaya Covid-19.</p><br>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Portfolio',
  props: [
    'dataPortfolio'
  ],
  methods: {
    imagePath(photo: string) {
      return require('../assets/' + photo)
    }
  }
})
</script>

<style lang="scss" scoped>
  .project {
    background-color: #393e46;
  }
  .items-project {
    width: 30%;
    padding-bottom: 10px;
    background-color: #222831;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 3px 1px rgba(194, 194, 194, 0.2);
    text-align: left;
    margin: 5px 5px;
    img {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 920px) {
    .items-project {
      width: 60%;
      img {
        width: 100%;
        margin-bottom: 5px;
      }
    }
  }
</style>