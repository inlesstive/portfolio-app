<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

const icons = [
  {
    name: "vite",
    image: "/vite.png",
  },
  {
    name: "vue",
    image: "/vue-icon.png",
  },
  {
    name: "sass",
    image: "/sass.svg",
  },
  {
    name: "nuxt",
    image: "/nuxt.svg",
  },
  {
    name: "vscode",
    image: "/vscode.png",
  },
  {
    name: "ts",
    image: "/ts.png",
  },
  {
    name: "html",
    image: "/html.png",
  },
  {
    name: "css",
    image: "/css.png",
  },
  {
    name: "js",
    image: "/js.png",
  },
  {
    name: "bootstrap",
    image: "/bootstrap.png",
  },
  {
    name: "python",
    image: "/python.svg",
  },
  {
    name: "fastapi",
    image: "/fastapi.png",
  },
  {
    name: "github",
    image: "/github.png",
  },
];
</script>

<template>
  <div class="wrapper tech__content">
    <h2 class="tech__title">
      {{ $t("tech__title") }}
    </h2>
    <div class="tech__block">
      <div :class="'tech__item' + ' ' + item.name" v-for="item in icons">
        <img :src="item.image" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.github {
  background: rgb(0, 0, 0, 0.09);
}
.fastapi {
  background: rgb(5, 153, 139, 0.15);
}
.python{
  background: rgb(55, 115, 166, 0.15);
}
.bootstrap {
  background: rgb(114, 16, 245, 0.15);
}
.js {
  background: rgb(240, 220, 78, 0.15);
}
.css {
  background: rgb(29, 136, 199, 0.15);
}
.html {
  background: rgb(255, 87, 34, 0.15);
}
.vue {
  background: rgba(65, 184, 131, 0.15);
}

.vite {
  background: rgb(186, 56, 254, 0.15);
}
.sass {
  background: rgb(207, 100, 154, 0.15)
}
.nuxt {
  background: rgb(0, 220, 130, 0.15)
}
.vscode {
  background: rgb(31, 156, 240, 0.15);;
}
.ts {
  background: rgb(49, 120, 198, 0.15);
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
