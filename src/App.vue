<template>
  <div id="app">
    <div class="app-wrapper">
      <Header />
      <div class="nav">
        <p>
          <router-link class="nav-icon" to="/cv">
            <span class="nav-text">CV</span>
          </router-link>
        </p>
        <p>
          <router-link class="nav-icon" to="/art">
            <span class="nav-text">Art</span>
          </router-link>
        </p>
        <p>
          <router-link class="nav-icon" to="/contact">
            <span class="nav-text">Contact</span>
          </router-link>
        </p>
      </div>
      <div class="mainContent">
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      show: true
    };
  }
};
</script>

