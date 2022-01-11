<template>
  <div class="home">
    <div class="left-home">
      <h1>Hi, I'm Fadhilah Dwi Ananda</h1>
      <p>Front-end Developer</p>
      <p>A frontend developer base in the area of Yogyakarta, Indonesia.</p>
      <template v-for="(item, index) in sosmed">
        <a :key="index" href="item.linkSosmed">
          <img v-bind:src="imagePath(item.imgSosmed)" alt="imgSosmed">
        </a>
      </template>
    </div>
    <div class="right-home">
      <img v-bind:src="imagePath(imgProfile)" alt="" class="imgProfile">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend ({
  name: 'Banner',
  props: [
    'sosmed', 'imgProfile'
  ],
  methods: {
    imagePath(photo) {
      return require('../assets/' + photo)
    }
  }
})
</script>

<style lang="scss" scoped>
  .home {
    background-color: #222831;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    height: 100vh;
    .left-home {
      margin-left: 7vw;
      h1 {
        font-size: 40px;
        font-weight: bolder;
        letter-spacing: 3px;
        margin-bottom: 20px;
      }
      p {
        font-weight: lighter;
        font-size: large;
        margin-bottom: 20px;
        width: 400px;
      }
      a img {
        width: 70px;
        height: 70px;
        margin-right: 30px;
      }
    }
    .right-home {
      margin-right: 7vw;
      img {
        width: 350px;
        height: 350px;
        border-radius: 100%;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      }
    }
  }

  @media screen and (max-width: 920px) {
    .home {
      .left-home {
        margin-left: 7vw;
        h1 {
          font-size: 30px;
          font-weight: bolder;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }
        p {
          font-weight: lighter;
          font-size: large;
          margin-bottom: 15px;
          width: 300px;
        }
        a img {
          width: 50px;
          height: 50px;
          margin-right: 20px;
        }
      }
      .right-home {
        margin-right: 7vw;
        img {
          width: 300px;
          height: 300px;
          border-radius: 100%;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  @media screen and (max-width: 790px) {
    .home {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    height: 660px;
      .left-home {
        margin-left: 0px;
        order: 2;
        h1 {
          font-size: 20px;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }
        p {
          font-size: 15px;
          width: auto;
        }
        a img {
          width: 40px;
          height: 40px;
          margin-right: auto;
        }
      }
      .right-home {
        margin-right: 0px;
        img {
          order: 1;
          width: 220px;
          height: 220px;
        }
      }
    }
    
    
  }
</style>