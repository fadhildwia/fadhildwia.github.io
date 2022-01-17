<template>
  <nav>
    <div class="brand">
      <h1>Fadhilah</h1> 
    </div>
    <ul>
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#project">Project</a></li>
      <li><a href="#publication">Publication</a></li>
    </ul>
    <div class="menu-toggle">
      <input type="checkbox">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar',
  methods: {
    // handleHamburger: function(e: any) {
    //   const menuToggle: any = document.querySelector(".menu-toggle input");
    //   const nav: any = document.querySelector("nav ul");

    //   menuToggle.addEventListener("click", () => {
    //     nav.classList.toggle("slide");
    //   });

    //   const logo: any = document.querySelector(".brand");
    //   logo.style.cursor = "pointer";

      // const navbars: any = document.querySelector(".navbar").querySelectorAll("a");
      // // const animations = document.querySelectorAll(".title");
      // // console.log(navbars);
      // // console.log(animations);
      // navbars.forEach((element: any) => {
      //   element.addEventListener("click", function () {
      //     navbars.forEach((navbar: any) => navbar.classList.remove("active"));

      //     this.classList.add("active");
      //   });
      // });
    // }
  }
})
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    height: 50px;
    width: 100%;
    align-items: center;
    background-color: #222831;
    color: rgb(201, 201, 201);
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    .brand { 
      margin-left: 7vw;
      h1 {
        letter-spacing: 3px;
        color: rgb(201, 201, 201);
      }
      :hover {
        color: #FFF;
        cursor: pointer;
      }
    }
    ul {
      display: flex;
      margin-right: 7vw;
      li a {
        display: inline-block;
        padding: 18px 25px;
        box-sizing: border-box;
        color: rgb(201, 201, 201);
        font-size: 0.8em;
      }
      :hover {
        color: white;
      }
    }
  }

  /* Humberger Menu */
  .menu-toggle {
    display: none;
    flex-direction: column;
    height: 20px;
    justify-content: space-between;
    position: relative;
    input {
      position: absolute;
      width: 40px;
      height: 28px;
      left: -5px;
      top: -3px;
      opacity: 0;
      cursor: pointer;
      z-index: 2;
    }
    span {
      display: block;
      width: 28px;
      height: 3px;
      background-color: rgb(201, 201, 201);
      border-radius: 5px;
      transition: all 0.5s;
    }
  }

  /* Humberger Menu Animation */
  .menu-toggle {
    span:nth-child(2) {
      transform-origin: 0 0;
    }
    span:nth-child(4) {
      transform-origin: 0 100%;
    }
    input:checked ~ span:nth-child(2) {
      background-color: white;
      transform: rotate(45deg) translate(-1px, -1px);
    }
    input:checked ~ span:nth-child(4) {
      transform: rotate(-45deg) translate(-1px, 0);
      background-color: white;
    }
    input:checked ~ span:nth-child(3) {
      opacity: 0;
      transform: scale(0);
    }
  }

  @media screen and (max-width: 790px) {
    nav {
      ul {
        position: absolute;
        right: 0;
        top: 30px;
        width: 50%;
        height: 70vh;
        margin: 20px 0;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        z-index: -1;
        background-color: #222831;
        transform: translateX(100%);
        opacity: 0;
        transition: all 1s;
        z-index: -99;
      }
      .slide {
        transform: translateX(0);
        opacity: 1;
      }
      .menu-toggle {
        display: flex;
        margin-right: 50px;
      }
    }
  }
</style>