<template>
  <div class="bg-main slidev-layout">
    <LayoutHeader :logoHeader="logoHeader" />
    <div class="my-auto">
      <slot />
    </div>
    <LayoutFooter :website="website" :bsky="bsky" />
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
  bsky: {
    type: String,
  },
});
</script>
