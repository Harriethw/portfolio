<template>
  <div class="CV-body">
    <div v-for="(cv, index) in cvData" :key="index">
      <div class="job-text">
        <div
          v-for="(key, index) in cvSchema"
          :key="index"
          v-html="cv[key.class]"
          v-bind:class="key.class"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import cvData from "@/assets/cvData.json";
import cvSchema from "@/assets/cvData.schema.json";

export default {
  name: "CV",
  data: function() {
    return {
      cvData: cvData,
      cvSchema: cvSchema
    };
  }
};
</script>