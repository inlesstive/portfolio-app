<script setup lang="ts">
const route = useRoute();
useHead({
  title: "Inlesstive. Home",
  meta: [
    {
      name: "description",
      content: "Portfolio works with the following features.",
    },
  ],
});
</script>

<template>
  <div>
    <Hero ref="hero" />
    <Technologies />
    <Projects items="2" />
    <Contact />
  </div>
</template>
