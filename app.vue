<script setup lang="ts"></script>

<template>
  <Header  />
  <NuxtPage />
  <Footer />
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/sf-pro-display");

.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

* {
  font-family: "SF Pro Display", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

:root {
  --light_bg_color: #fff;
  --dark_bg_color: #171717;

  --header__nav-acitve_color: rgba(0, 0, 0, 0.9);
  --header__nav-color: rgba(0, 0, 0, 0.4);
  --header__nav-transition-color: rgba(0, 0, 0, 0.6);
  --dark_header__acitve_color: rgba(255, 255, 255, 0.8);
  --hero__title-color: rgba(0, 0, 0, 0.87);
  --hero__button-resume-color: #2a2a2a;
  --hero__text-resume-color: #ffffff;
  --hero__tbutton-resume-color: #2a2a2ace;
  --hero__button-projects-color: rgba(211, 211, 211, 0.45);
  --hero__tbutton-projects-color: rgba(211, 211, 211, 0.979);
  --hero__text-projects-color: #2a2a2a;
  --title__color: rgba(0, 0, 0);
  --tech__block-color: rgba(217, 217, 217, 0.5);
  --secodn__black-color: rgba(0, 0, 0, 0.87);
  --project__card-color: rgba(224, 224, 224, 0.5);
  --input__form-color: rgba(0, 0, 0, 0.3);
}

.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1220px;
  padding: 0px 10px;
}

body {
  background-color: var(--light_bg_color);
}
</style>
