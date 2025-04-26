<template>
  <div
    class="bg-main text-gray-900 dark:(from-gray-800 to-gray-900 text-white) slidev-layout"
  >
    <LayoutHeader :logoHeader="logoHeader" />
    <div class="my-auto">
      <slot />
    </div>
    <LayoutFooter :github="github" :bsky="bsky" :email="email" />
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from "../components/LayoutHeader.vue";
import LayoutFooter from "../components/LayoutFooter.vue";

const props = defineProps({
  logoHeader: {
    type: String,
  },
  website: {
    type: String,
  },
  github: {
    type: String,
  },
  bsky: {
    type: String,
  },
  email: {
    type: String,
  },
});
</script>
