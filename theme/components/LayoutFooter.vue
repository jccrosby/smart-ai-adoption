<template>
  <footer
    v-if="website || bsky"
    class="mt-auto flex justify-between w-full text-fuchsia-700 dark:text-white"
  >
    <p v-if="website" class="mb-0">
      <a :href="website" target="_blank">{{ website }}</a>
    </p>
    <p v-if="bsky" class="mb-0">
      <a :href="bskyUrl" target="_blank">@{{ bsky }}.bsky.social</a>
    </p>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  website: {
    type: String,
  },
  bsky: {
    type: String,
  },
});
const bskyUrl = computed(() => {
  return `https://bsky.app/profile/${props.bsky}.bsky.social`;
});
</script>
