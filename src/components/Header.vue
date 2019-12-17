<template>
  <div class="header">
    <router-link to="/">
        <canvas class="zdog-canvas" width="100px" height="100px"></canvas>
    </router-link>
    <div class="title">
      <h1>Harriet Horobin-Worley</h1>
      <div class="intro">
        <h2>Creative Software Developer and Artist</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Zdog from "zdog";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted: function() {
    let isSpinning = true;

    let illo = new Zdog.Illustration({
      element: ".zdog-canvas",
      dragRotate: true,
      onDragStart: function() {
        isSpinning = false;
      }
    });

    new Zdog.Hemisphere({
      addTo: illo,
      diameter: 80,
      // fill enabled by default
      // disable stroke for crisp edge
      stroke: false,
      color: "#eb8dd6",
      backface: "#ffb6c1"
    });

    function animate() {
      illo.rotate.y += isSpinning ? 0.03 : 0;
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }

    animate();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 0px;
}
h2 {
  margin: 5px 0 5px 0;
  color: darkgrey;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.title {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
</style>
