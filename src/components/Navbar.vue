<template>
  <nav>
    <div class="brand">
      <h1>Fadhilah</h1> 
    </div>
    <ul class="navbar">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#project">Project</a></li>
      <li><a href="#publication">Publication</a></li>
      <li><a href="#certificate">Certificate</a></li>
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
  name: 'Navbar'
});
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    display: flex;
    background-color: #222831;
    justify-content: space-around;
    height: 50px;
    width: 100%;
    top: 0;
    color: rgb(201, 201, 201);
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    align-items: center;
  }

  .brand a {
    letter-spacing: 3px;
    color: rgb(201, 201, 201);
  }

  .brand a:hover {
    color: #fff;
  }

  nav ul {
    display: flex;
    width: 35%;
    justify-content: space-between;
  }

  nav ul li a {
    display: inline-block;
    padding: 18px 25px;
    box-sizing: border-box;
    color: rgb(201, 201, 201);
    font-size: 0.8em;
  }

  nav ul li a:hover {
    color: white;
  }

  /* Humberger Menu */

  .menu-toggle {
    display: none;
    flex-direction: column;
    height: 20px;
    justify-content: space-between;
    position: relative;
  }

  .menu-toggle input {
    position: absolute;
    width: 40px;
    height: 28px;
    left: -5px;
    top: -3px;
    opacity: 0;
    cursor: pointer;
    z-index: 2;
  }

  .menu-toggle span {
    display: block;
    width: 28px;
    height: 3px;
    background-color: rgb(201, 201, 201);
    border-radius: 5px;
    transition: all 0.5s;
  }

  /* Humberger Menu Animation */

  .menu-toggle span:nth-child(2) {
    transform-origin: 0 0;
  }

  .menu-toggle span:nth-child(4) {
    transform-origin: 0 100%;
  }

  .menu-toggle input:checked ~ span:nth-child(2) {
    background-color: white;
    transform: rotate(45deg) translate(-1px, -1px);
  }

  .menu-toggle input:checked ~ span:nth-child(4) {
    transform: rotate(-45deg) translate(-1px, 0);
    background-color: white;
  }

  .menu-toggle input:checked ~ span:nth-child(3) {
    opacity: 0;
    transform: scale(0);
  }
</style>