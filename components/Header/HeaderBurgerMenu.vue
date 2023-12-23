<script lang="ts" setup></script>

<template>
  <div class="header__burger">
    <ul class="header__burger-items">
      <li
        class="header__burger-item"
        v-for="(item, i) in $tm('navBar')"
        :key="i"
      >
        <router-link class="header__burger-item-link" @click="$emit('closeBurgerMenu')" :to="item.link">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.router-link-active {
    color: var(--header__nav-acitve_color) !important;
  }

.header__burger {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: var(--light_bg_color);
  z-index: 5;
  &-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    height: 100%;
  }
  &-item-link {
    color: var(--header__nav-color);
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.04px;
    transition: all 0.8s ease;
  }
}
</style>
