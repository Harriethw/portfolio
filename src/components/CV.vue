<template>
  <div class="CV-body">
    <div class="cv-sidebar">
      <div v-if="skillsShow" class="skills-list">
          <div class="skills-title">Skills</div>
          <ul>
            <li>C#, Java, Javascript</li>
            <li>Vue, React</li>
            <li>Firebase</li>
            <li>SQL</li>
            <li>GoCD, CircleCI</li>
            <li>Spring</li>
            <li>Unity</li>
            <li>Prototyping, testing and</li>
            <li>user research</li>
            <li>Copywriting, editing</li>
            <li>proofreading</li>

            <br />
            <li>Maya</li>
            <li>Photoshop</li>
            <li>iMovie</li>
            <li>Audacity</li>
          </ul>
      </div>
      <span @click="skillsShow = !skillsShow" class="title">+</span>
    </div>
    <div class="cv-content">
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
      cvSchema: cvSchema,
      skillsShow: false
    };
  }
};
</script>