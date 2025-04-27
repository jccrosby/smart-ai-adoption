<template>
    <footer
        v-if="website || bsky || github || email"
        class="mt-auto flex flex-col justify-center w-full text-purple-800 dark:text-white"
    >
        <!-- <p v-if="github" class="mb-0">
            <a
                :href="github"
                target="_blank"
                class="slidev-icon-btn text-2xl inline"
            >
                <carbon:logo-github />
                <div class="inline align-middle">{{ githubLabel }}</div>
            </a>
        </p> -->
        <div class="flex flex-wrap justify-around w-full gap-4 mb-7">
            <p v-if="email">
                <a :href="emailLink" class="text-2xl">
                    <carbon:email class="text-2xl mr-2 align-middle" />{{
                        email
                    }}
                </a>
            </p>
            <p v-if="website" class="mb-0">
                <a :href="website" class="text-2xl" target="_blank">{{
                    website
                }}</a>
            </p>
            <p v-if="bsky" class="mb-0">
                <a :href="bskyUrl" class="text-2xl" target="_blank">
                    bsky: @{{ bsky }}
                </a>
            </p>
        </div>
        <div class="flex flex-wrap justify-around mt-7">
            <p v-if="github">
                <carbon:logo-github class="text-2xl mr-2" /><a
                    :href="github"
                    class="text-2xl"
                    >{{ github }}</a
                >
            </p>
        </div>
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
const githubLabel = computed(() => {
    return props.github
        ? props.github.split("https://github.com")[1]
        : "GitHub";
});
const bskyUrl = computed(() => {
    return `https://bsky.app/profile/${props.bsky}`;
});
const email = props?.email ?? "";
const emailLink = computed(() => {
    return `mailto:${email}`;
});
</script>
