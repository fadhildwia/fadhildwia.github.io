<template>
  <footer>
    <div class="items">
      <h1>Fadhilah Dwi Ananda</h1>
      <p>Front-end Developer</p>
      <div class="icon">
        <a href="https://www.linkedin.com/in/fadhilahdwiananda/"><img src="../assets/images/ic_linkedin.svg" alt="" class="linkedin"></a>
        <a href="https://github.com/fadhildwia"><img src="../assets/images/ic_github.svg" alt="" class="github"></a>
        <a href="https://www.instagram.com/fadhilahdwia/"><img src="../assets/images/ic_instagram.svg" alt="" class="instagram"></a>
      </div>
      <p>© Copyright 2021, All Rights Reseved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer'
})
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    justify-content: center;
    text-align: center;
    color: #fff;
    background-color: #393e46;;
    padding: 20px 0;
  }

  footer div h1,
  p,
  a {
    margin: 20px 0;
  }

  footer img {
    width: 70px;
    height: 70px;
  }
</style>