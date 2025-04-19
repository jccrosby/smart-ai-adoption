<template>
  <footer
    v-if="website || bsky || github || email"
    class="mt-auto flex justify-between w-full text-purple-800 dark:text-white"
  >
    <p v-if="github" class="mb-0 text-2xl">
      <a href="github" target="_blank" class="slidev-icon-btn">
        <carbon:logo-github />
      </a>
    </p>
    <p v-if="email" class="">
      <a :href="emailLink">{{ email }}</a>
    </p>
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
  github: {
    type: String,
  },
  email: {
    type: String,
  },
});
const bskyUrl = computed(() => {
  return `https://bsky.app/profile/${props.bsky}.bsky.social`;
});
const email = props?.email ?? "";
const emailLink = computed(() => {
  return `mailto:${email}`;
});
</script>
