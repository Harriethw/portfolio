<template>
  <div id="app">
    <Header />
    <div class="nav">
      <p>
        <router-link class="nav-icon" to="/CV">
          <span>CV</span>
        </router-link>
      </p>
      <p>
        <router-link class="nav-icon" to="/Art">
          <span>Art</span>
        </router-link>
      </p>
      <p>
        <router-link class="nav-icon" to="/Contact">
          <span>Contact</span>
        </router-link>
      </p>
    </div>
    <div class="mainContent">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  },
  data ()  {
    return {
    show: true
    }
  }
};
</script>

