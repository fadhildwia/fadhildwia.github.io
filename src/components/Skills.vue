<template>
  <div class="title skills" id="skills">
    <h1>Skills</h1>
    <div>
      <img src="../assets/figma.png" alt="" class="figma">
      <img src="../assets/html.png" alt="" class="html">
      <img src="../assets/css.png" alt="" class="css">
      <img src="../assets/jsedit.png" alt="" class="js">
      <img src="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png" alt="">
      <img src="../assets/git.png" alt="" class="git">
      <img src="../assets/nodejs.png" alt="" class="node">
      <img src="../assets/python.png" alt="" class="python">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Skills'
})
</script>

<style lang="scss" scoped>
  .skills {
    background-color: #222831;
  }

  .skills div {
    width: 60%;
  }

  .skills img {
    height: 200px;
    width: 200px;
    margin: 20px;
  }
</style>