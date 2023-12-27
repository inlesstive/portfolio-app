<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  const tl = gsap.timeline();

  tl.from(
    ".header1",
    {
      y: 10,
      opacity: 0,
      duration: 1,
    }
  );
});
const route = useRoute();

const burgerMenuController = ref(false);
const LangMenyController = ref(false);
const { locale } = useI18n();
const LangMenu = () => {
  LangMenyController.value = !LangMenyController.value;
};

const isClient = process.client;
let localeStorage = ref(isClient ? localStorage.getItem("lang") : null);
const langArr = ref([
  {
    lang: "ru",
    img: "/ru.svg",
  },
  {
    lang: "en",
    img: "/en.svg",
  },
  {
    lang: "uz",
    img: "/uz.svg",
  },
]);
const imageSrc = ref("");
onMounted(() => {
  const storedLang = isClient ? localStorage.getItem("lang") : null;
  localeStorage.value = locale.value;
  if ((isClient ? localStorage.getItem("lang") : null) === null) {
    localStorage.setItem("lang", locale.value);
  }
  if (storedLang) {
    imageSrc.value = `/${storedLang}.svg`;
  } else {
    imageSrc.value = `/${locale}.svg`;
  }
});
function changeLang(lang: any) {
  locale.value = lang;
  localeStorage.value = lang;
  imageSrc.value = `/${lang}.svg`;
  localStorage.setItem("lang", locale.value);
}

const filteredLangArr = computed(() => {
  return langArr.value.filter((item) => item.lang !== localeStorage.value);
});
</script>

<template>
  <transition name="fade-burger">
    <HeaderBurgerMenu
      @close-burger-menu="burgerMenuController = false"
      v-show="burgerMenuController"
    />
  </transition>
  <div class="wrapper header1">
    <header class="header">
      <div class="header__logo">inlesstive.</div>

      <nav class="header__nav">
        <ul class="header__nav-items">
          <li
            class="header__nav-item"
            v-for="(item, i) in $tm('navBar')"
            :key="i"
          >
            <router-link class="header__nav-item-link" :to="item.link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="header__action">
        <!-- <button class="header__action__switcher theme">
          <img src="@/assets/icons/sun.svg" alt="Icons sun" />
        </button> -->

        <div class="select__language">
          <div class="header__header">
            <div
              @click="LangMenyController = !LangMenyController"
              class="header__lang-select"
            >
              <img :src="`${imageSrc}`" alt="Picker language flag" />
            </div>
          </div>

          <Transition name="fade-lang">
            <div v-if="LangMenyController" class="header__body">
              <div
                v-for="language in filteredLangArr"
                @click="changeLang(language.lang)"
                :key="language"
                class="lang__picker"
              >
                <img :src="language.img" alt="Picker language flag" />
              </div>
            </div>
          </Transition>
        </div>

        <div class="header__action__switcher">
          <div
            id="nav-icon4"
            @click="burgerMenuController = !burgerMenuController"
            :class="burgerMenuController === false ? '' : 'open'"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.fade-lang-enter-active,
.fade-lang-leave-active {
  transition: opacity 0.5s ease;
}

.fade-lang-enter-from,
.fade-lang-leave-to {
  opacity: 0;
}

.fade-burger-enter-active,
.fade-burger-leave-active {
  transition: opacity 0.5s ease;
}

.fade-burger-enter-from,
.fade-burger-leave-to {
  opacity: 0;
}

.select__language {
  position: relative;
}

.header__body {
  position: absolute;
  top: 45px;
  cursor: pointer;
}

.select__languge {
  position: relative;
}

.header__lang-select img {
  width: 30px;
  cursor: pointer;
}
.lang__picker {
  cursor: pointer;
  user-select: none;
}

.lang__picker img {
  width: 30px;
  height: 30px;
  user-select: none;
}

.router-link-active {
  color: var(--header__nav-acitve_color) !important;
}
.lang {
  z-index: 100;
}

#nav-icon4 {
  width: 30px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: none;
  z-index: 7;
}
#nav-icon4 span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: rgb(92, 92, 92);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}
#nav-icon4 span:nth-child(1) {
  top: 4px;
  transform-origin: left center;
}
#nav-icon4 span:nth-child(2) {
  top: 13px;
  transform-origin: left center;
}
#nav-icon4 span:nth-child(3) {
  top: 22px;
  transform-origin: left center;
}
#nav-icon4.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 3px;
  left: 5px;
}
#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}
#nav-icon4.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 24px;
  left: 5px;
}
@media screen and (max-width: 575.99px) {
  .header__nav-items {
    display: none !important;
  }
  #nav-icon4 {
    display: block;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 10px;

  &__action__lang-selector {
    position: absolute;
    top: 90px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__logo {
    color: rgba(0, 0, 0, 0.87);
    font-family: SF Pro Display;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0.062px;
  }
  &__nav-item-link {
    color: var(--header__nav-color);
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.04px;
    transition: all 0.8s ease;
  }
  &__nav-item-link:hover {
    color: var(--header__nav-transition-color);
  }

  &__action {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  &__nav-items {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  &__action__switcher {
    outline: none;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    & img {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
