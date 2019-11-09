<script>
import artData from "@/assets/artData.json";
import artSchema from "@/assets/artData.schema.json";
export default {
  name: "Art",
  data: function() {
    return {
      artData: artData,
      artSchema: artSchema
    };
  }
};
</script>

<template>

  <div class="art-body">
    <div class="title">
      <h1>A selection of my work</h1>
    </div>
    <div v-for="(art, index) in artData" :key="index">
      <img :src="require('@/assets/' + art.img)" />
      <div
        v-for="(key, index) in artSchema"
        :key="index"
        v-html="art[key.class]"
        v-bind:class="key.class"
      ></div>
    </div>
  </div>

</template>

