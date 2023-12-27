<script lang="ts" setup>
defineProps({
  items: String,
});

const {tm} = useI18n()

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects__content",
      toggleActions: "restart reverse restart reverse",
      start: "top bottom",
      end: "bottom+=500 top",
    },
  });
  tl.from(".projects__title", {
    opacity: 0,
    y: 50,
    duration: 0.7,
  });
  tl.from(".projects__button", {
    opacity: 0,
    y: 50,
    duration: 0.2,
  });

  for (let i = 0; i < tm('projects-items').length; i++) {
    tl.from(`.index${i}`, {
    opacity: 0,
    y: 50,
    duration: 0.2,
    delay: 0.09,
  });
  }
});
</script>

<template>
  <div class="wrapper projects__content">
    <h2 class="projects__title">
      {{ $t("projects__title") }}
    </h2>
    <div class="projects__block">
      <div
        :class="'projects__item' + ' index' + index"
        v-for="(item, index) in $tm('projects-items').slice(0, items)"
      >
        <img src="/project.png" alt="" />

        <h3 class="projects__item-title">
          {{ item.title }}
        </h3>
        <p class="projects__item-text">
          {{ item.description }}
        </p>
        <div class="projects__item-tags">
          <div class="projects__item-tags-item" v-for="tags in item.tags">
            {{ tags }}
          </div>
        </div>
      </div>
    </div>
    <div class="projects__button" v-show="items">
      <NuxtLink class="projects__button-watchall" to="/projects">
        {{ $t("project__button-watchall") }}
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@media screen and (max-width: 786.99px) {
  .projects__block {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
.projects {
  &__button {
    display: flex;
    width: 100%;
    margin-top: 25px;
    justify-content: center;
    &-watchall {
      padding: 13px 34px;
      background-color: var(--hero__button-resume-color);
      color: var(--hero__text-resume-color);
      border-radius: 12px;
    }
  }
  &__content {
    margin-top: 100px;
  }
  &__block {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  &__item {
    &-tags {
      display: flex;
      gap: 10px;
      &-item {
        padding: 9px 13px;
        border-radius: 12px;
        background: var(--project__card-color);
      }
    }
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--tech__block-color);
    flex-shrink: 0;
    padding: 21px;
    border-radius: 32px;
    &-tags {
      margin-top: auto;
    }
    &-text {
      color: var(--secodn__black-color);
      font-family: SF Pro Display;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 33.6px */
    }
    & img {
      width: 100%;
      height: 350px;
    }
    &-title {
      color: var(--title__color);
      font-family: SF Pro Display;
      font-size: 39px;
      font-style: normal;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: 0.086px;
    }
  }
  &__title {
    font-family: SF Pro Display;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0.141px;
    text-align: center;
  }
}
</style>
