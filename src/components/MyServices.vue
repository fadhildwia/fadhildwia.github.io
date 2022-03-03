<template>
  <div class="title about" id="about">
    <h1>My Services</h1>
    <div class="item">
      <template v-for="(item, index) in dataServices">
        <div class="card opacity80" :key="index">
          <div class="image">
            <img :src="imagePath(item.img)" width="100px">
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MyServices',
  props: [
    'dataServices'
  ],
  data: function() {
    return {
      test: 'ic_coding.svg'
    }
  },
  methods: {
    imagePath(photo: string) {
      return require('../assets/images/' + photo)
    }
  }
})
</script>

<style lang="scss" scoped>
  .about {
    .item {
      width: 40vw;
      display: flex;
      flex-direction: row;
      gap: 50px;
      flex-wrap: wrap;
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
        height: 250px;
        width: 250px;
        .image {
          text-align: center;
        }
        h3 {
          color: black;
          font-weight: bold;
          margin-bottom: 10px;
        }
        p {
          color: black;
        }
      .opacity80 {
        opacity: 0.8;
      }
      }
    }
  }

  @media screen and (max-width: 920px) {
    .about {
      .item {
        width: 80vw;
      }
    }
  }

  @media screen and (max-width: 790px) {
    .about {
      
    }
  }
</style>