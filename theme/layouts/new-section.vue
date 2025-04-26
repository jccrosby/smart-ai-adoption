<template>
  <default class="new-section">
    <div class="flex items-center">
      <figure class="w-1/2">
        <img
          :src="imageSrc"
          v-if="imageSrc"
          alt="new section"
          width="400"
          height="400"
          class="ml-auto object-cover max-h-[400px]"
        />
      </figure>
      <div class="w-1/2 text-right pr-12">
        <slot />
      </div>
    </div>
  </default>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { resolveAssetUrl } from "../layoutHelper";
import Default from "./default.vue";

const props = defineProps({
  sectionImage: {
    type: String,
  },
});
const imageSrc = props?.sectionImage
  ? computed(() => resolveAssetUrl(props.sectionImage))
  : null;
</script>

<style>
.slidev-layout.new-section {
  @apply bg-gradient-to-r from-purple-900 to-purple-700 text-purple-100;
}

.slidev-layout.new-section *,
.slidev-layout.new-section h1,
.slidev-layout.new-section h2,
.slidev-layout.new-section h3,
.slidev-layout.new-section h4,
.slidev-layout.new-section h5,
.slidev-layout.new-section h6,
.slidev-layout.new-section p,
.slidev-layout.new-section strong,
.slidev-layout.new-section a {
  @apply text-red-200;
}
</style>
