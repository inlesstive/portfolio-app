<script lang="ts" setup></script>

<template>
  <div class="wrapper hero__content">
    <h1 class="hero__title">
      <div>
        <span>
          {{ $t("hero__title") }}
        </span>
        <IconsHelloEmoji class="hero__img" />
        <span>
          {{ $t("hero__subtit") }}
        </span>
      </div>
      <span class="hero__style-text">
        {{ $t("hero__nametitle") }}
      </span>
    </h1>
    <p class="hero__subtitle">
      {{ $t("hero__subtitle") }}
    </p>
    <div class="hero__group-button">
      <NuxtLink class="hero__group-button-resume" to="/">
        {{ $t("hero__group-button-resume") }}
      </NuxtLink>
      <NuxtLink class="hero__group-button-projects" to="https://youtube.com/">
        {{ $t("hero__group-button-projects") }}
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {

  &__subtitle {
    color: var(--hero__text-projects-color);
    text-align: center;
    font-family: SF Pro Display;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    max-width: 600px;
  }
  &__group-button {
    display: flex;
    gap: 20px;
    &-resume {
      padding: 13px 24px;
      background-color: var(--hero__button-resume-color);
      color: var(--hero__text-resume-color);
      border-radius: 12px;
      transition: background-color 0.3s;
      &:hover {
        background-color: var(--hero__tbutton-resume-color);
      }
    }
    &-projects {
      padding: 13px 24px;
      background-color: var(--hero__button-projects-color);
      color: var(--hero__text-projects-color);
      border-radius: 12px;
      transition: background-color 0.3s;
      &:hover{
        background-color: var(--hero__tbutton-projects-color);
      }
    }
  }
  &__img {
    width: 50px;
    height: 50px;
  }
  &__title {
    color: var(--hero__title-color);
    text-align: center;
    font-family: SF Pro Display;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0.141px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__style-text {
    color: rgba(0, 0, 0, 0);

    -webkit-text-stroke: 1.5px black;
  }
  &__content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 120px;
  }
}
</style>
