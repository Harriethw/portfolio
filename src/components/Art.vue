<script>
import artData from "@/assets/artData.json";
import artSchema from "@/assets/artData.schema.json";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Art",
  components: {
    Carousel,
    Slide
  },
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
    <div class="art-intro">
      I make interactive art, tools and apps that aim to delight and inspire people.
      <br />
      <br />If you'd like to collaborate on a project, please get in touch :)
    </div>
    <div v-for="(art, index) in artData" :key="index" class="work">
      <div class="work-text">
        <div
          v-for="(key, index) in artSchema"
          :key="index"
          v-html="art[key.class]"
          v-bind:class="key.class"
        ></div>
        <div v-if="art['link']">
          <a :href="art['link']">{{ art['link'] }}</a>
        </div>
      </div>
      <div class="work-image">
        <carousel
          :perPage="1"
          :paginationSize="15"
          paginationActiveColor="#eb8dd6"
          paginationColor="#ffb6c1"
        >
          <slide v-for="fileName in art.img" :key="fileName">
            <img :src="require('@/assets/' + fileName)" class="art-image" :alt="art['alt-text']"/>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

