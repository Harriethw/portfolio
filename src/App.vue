<template>
  <div id="app">
    <Header />
    <div class="nav">
      <p>
        <router-link to="/CV">
        <span class="navIcon">CV</span>
  
        </router-link>
      </p>
      <p>
        <router-link to="/Art">
        <span class="navIcon">Art</span>
        </router-link>
      </p>
      <p>
        <router-link to="/Contact">
        <span class="navIcon">Contact</span>
        </router-link>
      </p>
    </div>
    <div class="mainContent"><router-view /></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
