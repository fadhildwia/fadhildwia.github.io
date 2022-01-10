<template>
  <div class="title certificate" id="certificate">
    <h1>Certificate</h1>
    <div class="items">
      <div class="items-certificate">
        <a href="https://www.dicoding.com/certificates/QLZ98M3VDX5D"><img src="../assets/belajar-dasar-pemrograman-web.jpg" alt="" class=""></a>
        <h2>Belajar Dasar Pemrograman Web</h2>
      </div>
      <div class="items-certificate">
        <a href="https://academy.dqlab.id/certificate/pdf/DQLABINTP1TALJEK/NONTRACK"><img src="../assets/analisis-data-covid19-di-dunia-asian.jpg" alt="" class=""></a>
        <h2>Data Science Project: Analisis Data COVID19 di Dunia & ASEAN</h2>
      </div>
      <div class="items-certificate">
        <a href="https://academy.dqlab.id/certificate/pdf/DQLABACWP1CJVLRI/NONTRACK"><img src="../assets/eksplorasi-dan-analisis-data-covid19.jpg" alt="" class=""></a>
        <h2>Eksplorasi dan Analisis Data COVID-19 Indonesia using Python</h2>
      </div>
      <div class="items-certificate">
        <a href="https://www.dicoding.com/certificates/L4PQM94L4ZO1"><img src="../assets/meniti-karier-sebagai-software-developer.jpg" alt="" class=""></a>
        <h2>Meniti Karier sebagai Software Developer</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Certificate'
})
</script>

<style lang="scss" scoped>
  .certificate {
    background-color: #393e46;
  }

  .items-certificate {
    width: 20%;
    padding-bottom: 10px;
    background-color: #222831;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 3px 1px rgba(194, 194, 194, 0.2);
    text-align: center;
    margin: 5px 5px;
  }

  .items-certificate img {
    width: 100%;
    margin-bottom: 10px;
  }
</style>