<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Home from './views/Home.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Home
  }
});
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: lato, sans-serif;
    overflow-x: hidden;
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
  }

  /*==========================TRANSITION==========================*/
  @keyframes transitionIn {
    from {
      opacity: 0;
      transform: translateX(-10deg);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  body {
    animation: transitionIn 0.75s;
  }
  nav ul li a.active {
    color: #fff;
  }

  /*============================FOR ALL=========================*/
  .title {
    background-color: #393e46;
    padding: 60px 0;
    gap: 30px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
      width: 35vw;
      font-size: 25px;
      font-weight: bolder;
      letter-spacing: 3px;
      padding-bottom: 20px;
      border-bottom: 2px solid #d89216;
    }
    .items {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      width: 80%;
      h2 {
        font-size: 12px;
        margin-bottom: 10px;
      }
      p {
        font-size: 11px;
        line-height: 130%;
      }
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* background-color: red; */
  }

  @media screen and (max-width: 620px) {
    .title {
      h1 {
        font-size: 15px;
      }
    }
  }
</style>
