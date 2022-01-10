<template>
  <div class="title publication" id="publication">
    <h1>Publication</h1>
    <div class="items">
      <div class="items-publication">
        <a href="https://journal.universitasbumigora.ac.id/index.php/matrik/article/view/1130/702"><img src="../assets/jurnal.jpg" alt="" class="jurnal"></a>
        <h2>Analisis Sentimen Pengguna TwitterTerhadap Layanan Internet Provider Menggunakan Algoritma Support Vector Machine</h2>
        <p>Jurnal publikasi ini saya tulis berdasarkan hasil dari penelitian yang saya lakukan saat mengerjakan tugas akhir kuliah yaitu skripsi. Jurnal ini membahas tentang bagaimana cara mengetahui sentimen dari pengguna layanan internet dari provider tertentu dengan program kecerdasan buatan yang dibuat menggunakan bahasa Python dan algoritma Support Vector Machine kemudian di aplikasikan dalam bentuk website.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Publisher'
})
</script>

<style lang="scss" scoped>
  .publication {
    background-color: #222831;
  }

  .items-publication {
    width: 20%;
    padding-bottom: 10px;
    background-color: #393e46;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 5px 1px rgba(194, 194, 194, 0.2);
    text-align: left;
  }

  .items-publication img {
    width: 100%;
    margin-bottom: 10px;
  }
</style>