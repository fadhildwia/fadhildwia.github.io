<template>
  <div class="title skills" id="skills">
    <h1>Skills</h1>
    <div class="container">
      <template v-for="(item, index) in dataSkills">
        <div class="card" :key="index">
          <img v-bind:src="imagePath(item.imgSkill)" alt="item.imgSkill">
          <div class='label'>{{item.label}}</div>
        </div>
      </template>
      <!-- <img src="../assets/html.png" alt="" class="html">
      <img src="../assets/css.png" alt="" class="css">
      <img src="../assets/jsedit.png" alt="" class="js">
      <img src="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png" alt="">
      <img src="../assets/git.png" alt="" class="git">
      <img src="../assets/nodejs.png" alt="" class="node">
      <img src="../assets/python.png" alt="" class="python"> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Skills',
  props: [
    'dataSkills'
  ],
  methods: {
    imagePath(photo: string) {
      return require('../assets/' + photo)
    }
  }
})
</script>

<style lang="scss" scoped>
  .skills {
    background-color: #222831;
    .container {
      margin: 0 7vw;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 50px;
      .card {
        width: 250px;
        height: 250px;
        border-radius: 10px;
        background: #393e46;
        box-shadow: 0px 0px 5px 1px rgba(194, 194, 194, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .label {
          font-size: 30px;
        }
      }
    img {
      height: 150px;
      width: 150px;
      margin-bottom: 20px;
    }
    }
  }

  @media screen and (max-width: 920px) {
    .skills {
      .container {
        .card {
          width: 200px;
          height: 200px;
          border-radius: 10px;
          background: #393e46;
          box-shadow: 0px 0px 5px 1px rgba(194, 194, 194, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .label {
            font-size: 20px;
          }
        }
        img {
          height: 100px;
          width: 100px;
          margin: 15px;
        }
      }
    }
  }
  
  @media screen and (max-width: 790px) {
    .skills {
      .container {
        .card {
          width: 90px;
          height: 90px;
          border-radius: 10px;
          background: #393e46;
          box-shadow: 0px 0px 5px 1px rgba(194, 194, 194, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .label {
            font-size: 14px;
          }
        }
        img {
          height: 45px;
          width: 45px;
          margin: 5px;
        }
      }
    }
  }
</style>