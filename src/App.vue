<template>
  <div id="app">
    <div class="app-wrapper">
      <Header />
      <NavBar />
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
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    NavBar
  },
  data() {
    return {
      show: true
    };
  }
};
</script>

