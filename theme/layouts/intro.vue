<template>
  <default class="intro">
    <div class="flex items-center">
      <figure class="w-1/2 px-18">
        <img
          :src="imageSrc"
          height="312"
          width="312"
          class="rounded-full p-5 bg-gradient-to-r from-red-400 to-red-500 dark:(from-purple-600 to-purple-800)"
        />
      </figure>
      <div class="w-1/2">
        <slot />
      </div>
    </div>
  </default>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { resolveAssetUrl } from "../layoutHelper";
import Default from "../layouts/default.vue";

const props = defineProps({
  introImage: {
    type: String,
  },
});
const imageSrc = computed(() => resolveAssetUrl(props?.introImage ?? ""));
</script>
