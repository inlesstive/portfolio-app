<script lang="ts" setup>
const footerLink = useFooterLink();
</script>

<template>
  <div class="wrapper footer__content">
    <div class="footer__block">
      <span class="footer__year">
        {{ "© " + new Date().getFullYear() }}
      </span>

      <ul class="footer__links">
        <li class="footer__link" v-for="item in footerLink">
          <NuxtLink :to="item.link">
            <div :class="item.name" v-html="item.img">

            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.telegram-b:hover .telegram {
    fill: red;
}

.footer {
  &__content {
    margin-top: 90px;
  }
  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  &__links {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}
</style>
