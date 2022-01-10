<template>
  <div class="home">
    <div class="left-home">
      <h1>Hi, I'm Fadhilah Dwi Ananda</h1>
      <p>Front-end Developer</p>
      <p>A frontend developer base in the area of Yogyakarta, Indonesia.</p>
      <a href="https://www.linkedin.com/in/fadhilahdwiananda/"><img src="../assets/linkedin.svg" alt="" class="linkedin"></a>
      <a href="https://github.com/fadhildwia"><img src="../assets/github.svg" alt="" class="github"></a>
      <a href="https://www.instagram.com/fadhilahdwia/"><img src="../assets/instagram.svg" alt="" class="instagram"></a>
    </div>
    <div class="right-home">
      <img src="../assets/2.png" alt="" class="profile">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend ({
  name: 'Banner'
})
</script>

<style lang="scss" scoped>
  .home {
    background-color: #222831;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 750px;
  }

  .left-home {
    width: 50%;
    /* background-color: green; */
  }

  .left-home h1 {
    font-size: 40px;
    font-weight: bolder;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }

  .left-home p {
    font-weight: lighter;
    font-size: large;
    margin-bottom: 20px;
    width: 400px;
  }

  .left-home img {
    width: 70px;
    height: 70px;
    margin-right: 30px;
  }

  .right-home img {
    width: 500px;
    height: 500px;
    border-radius: 100%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
</style>