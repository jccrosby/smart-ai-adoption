<template>
  <default class="end">
    <div class="flex flex-col items-center justify-center text-center">
      <slot />
    </div>
  </default>
</template>

<script setup lang="ts">
import Default from "../layouts/default.vue";
</script>

<style>
.slidev-layout.end {
  @apply bg-gradient-to-r from-sky-500 to-sky-600 text-white;
}

.slidev-layout.end *,
.slidev-layout.end h1,
.slidev-layout.end h2,
.slidev-layout.end h3,
.slidev-layout.end h4,
.slidev-layout.end h5,
.slidev-layout.end h6,
.slidev-layout.end p,
.slidev-layout.end strong,
.slidev-layout.end a {
  @apply text-white;
}
</style>
