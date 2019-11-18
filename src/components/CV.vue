<template>
  <div class="CV-body">
    <div class="cv-sidebar">
      <transition
    enter-active-class="skills-enter-active"
    leave-active-class="skills-leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    mode="out-in"
  >
      <div v-if="skillsShow" class="skills-list">
          <div class="skills-title">Skills</div>
          <ul>
            <li>C#, Java</li>
            <li>Vue, React</li>
            <li>Firebase</li>
            <li>SQL</li>
            <li>GoCD, CircleCI</li>
            <li>Spring</li>
            <li>Unity</li>
            <li>Prototyping</li>
            <li>User Research</li>
            <li>Copywriting</li>

            <br />
            <li>Maya</li>
            <li>Photoshop</li>
            <li>iMovie</li>
            <li>Audacity</li>
          </ul>
      </div>
      </transition>
      <span @click="skillsShow = !skillsShow" :class="{ skillsShow: skillsShow }" class="title skills-button">></span>
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
  },
  methods: {
    /**
     * @param {HTMLElement} element
     */
    beforeEnter(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.width = '0px';
        }

        element.style.display = null;
      });
    },
    /**
     * @param {HTMLElement} element
     */
    enter(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.width = `${element.scrollWidth}px`;
        });
      });
    },
    /**
     * @param {HTMLElement} element
     */
    afterEnter(element) {
      element.style.width = null;
    },
    /**
     * @param {HTMLElement} element
     */
    beforeLeave(element) {
      requestAnimationFrame(() => {
        if (!element.style.width) {
          element.style.width = `${element.offsetWidth}px`;
        }
      });
    },
    /**
     * @param {HTMLElement} element
     */
    leave(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.width = '0px';
        });
      });
    },
    /**
     * @param {HTMLElement} element
     */
    afterLeave(element) {
      element.style.width = null;
    },
  }
};
</script>