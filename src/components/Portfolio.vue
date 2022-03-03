<template>
  <div class="title project" id="project">
    <h1>Project</h1>
    <div class="items">
      <template v-for="(item, index) in dataPortfolio">
        <div class="items-project" :key="index">
          <a :href="item.link"><img v-bind:src="imagePath(item.img)" alt="item.img" class=""></a>
          <h2>{{item.title}}</h2>
          <p>{{item.desc}}</p><br>
        </div>
      </template>
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
      return require('../assets/images/' + photo)
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
    height: 350px;
    img {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 920px) {
    .items-project {
      width: 80%;
      height: 350px;
      img {
        width: 100%;
        margin-bottom: 5px;
      }
    }
  }

  @media screen and (max-width: 790px) {
    .items-project {
      width: 80%;
      height: auto;
    }
  }
</style>