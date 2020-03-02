
<template>
  <div>
    <canvas class="zdog-experiment" width="600" height="600"></canvas>
  </div>
</template>

<script>
import Zdog from "zdog";

export default {
  /* eslint-disable */
  name: "zdog",
  mounted: function() {
    let isSpinning = true;

    let illo = new Zdog.Illustration({
      element: ".zdog-experiment",
      zoom: 6,
      dragRotate: true,
    //   onDragStart: function() {
    //     isSpinning = false;
    //   }
    });

    //circle
    let head = new Zdog.Shape({
      addTo: illo,
      // fill enabled by default
      // disable stroke for crisp edge
      stroke: 12,
      color: "#FFAAEC"
    });

    //eye
    let eye = new Zdog.Ellipse({
      addTo: head,
      diameter: 2,
      quarters: 2, // semi-circle
      translate: { x: -2, y: -1, z: 4.5 },
      // rotate semi-circle to point up
      rotate: { z: 1.5 },
      color: "#FCFBF7",
      stroke: 0.5,
      // hide when front-side is facing back
      backface: false
    });

    eye.copy({
      translate: { x: 2, y: -1, z: 4.5 }
    });

    //petal
    let petal = new Zdog.Shape({
      addTo: illo,
      path: [
        { x: 0, y: 6 },

        // { x: -1, y: -9 },
        {
          arc: [
            { x: 6, y: 12 },
            { x: 0, y: 12 }
          ]
        },
        {
          arc: [
            { x: -6, y: 12 },
            { x: 0, y: 6 }
          ]
        }
      ],
      closed: false,
      stroke: 1,
      fill: true,
      color: "#FF5733",
      backface: "#F97153",
      rotate: { z: -0.1 }
    });

    let i = 1;
    for (; i < 6; i++) {
      petal.copy({
        rotate: { z: i }
      });
    }

    //stalk
    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: -4, y: -6 },
        {
          bezier: [
            { x: 3, y: -6 }, // start control point
            { x: -1, y: 6 }, // end control point
            { x: 8, y: 20 } // end point
          ]
        }
      ],
      translate: { y: 10.5, x: 8 },
      closed: false
    });


    //pot body
    let potLayer = new Zdog.Cylinder({
        addTo: illo,
        diameter: 10,
        length: 2,
        rotate: { x: 1.4 },
        translate: {
            y: 32,
            x: 16
        },
        fill: true,
        color: "#E62",
        
    })

    let diameter = 10;
    let yAxis = 34;
    for (; diameter < 16; diameter++) {
     potLayer.copy({
        diameter: diameter,
        translate: {
            y: yAxis,
            x: 16
        },
        backface: false,
        color: "#7A291C",
      });
        yAxis += 2;
    }
    

    //leaf
    let leaf = new Zdog.Shape({
      addTo: illo,
      path: [
        { x: 9.5, y: 22 },

        // { x: -1, y: -9 },
        {
          arc: [
            { x: 25, y: 22 },
            { x: 22, y: 10 }
          ]
        },
        {
          arc: [
            { x: 15, y: 12 },
            { x: 9.5, y: 22 }
          ]
        }
      ],
      closed: false,
      stroke: 1,
      fill: true,
      color: "#1FA542",
      backface: "#3BD162",
      rotate: { z: -0.1 }
    });

    leaf.copy({
      rotate: { z: -2 }
    });

    leaf.copy({
      rotate: { z: -4 }
    });

    leaf.copy({
      rotate: { z: -5.5 },
      translate: { x: 3 }
    });

    function animate() {
    //   illo.rotate.y += isSpinning ? 0.03 : 0;
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
