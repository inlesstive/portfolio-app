<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".tech__content",
      toggleActions: "restart reverse restart reverse",
      start: "top bottom",
      end: "bottom+=100 top",
    },
  });
  tl.from(".tech__title", {
    opacity: 0,
    y: 50,
    duration: 1,
  });
  tl.from(".tech__block", { opacity: 0, y: 50, duration: 0.5 });
});
</script>

<template>
  <div class="wrapper tech__content">
    <h2 class="tech__title">
      {{ $t("tech__title") }}
    </h2>
    <div class="tech__block">
      <div class="tech__item vue" v-for="item in 10">
        <img src="/vue-icon.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vue {
  background: rgba(65, 184, 131, 0.35);
}

.tech {
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    & img {
      width: 32px;
      height: 32px;
    }
  }
  &__content {
    margin-top: 130px;
  }
  &__block {
    background-color: var(--tech__block-color);
    width: 100%;
    height: max-content;
    padding: 30px;
    border-radius: 32px;
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(
      auto-fill,
      minmax(48px, 1fr)
    ); // Меняйте значения в minmax() в зависимости от вашего дизайна
    gap: 16px; // Пространство между элементами, можно менять по желанию
    width: 100%; // Ширина блока
  }
  &__title {
    color: var(--title__color);
    font-family: SF Pro Display;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 64px */
    letter-spacing: 0.141px;
    text-align: center;
  }
}
</style>
