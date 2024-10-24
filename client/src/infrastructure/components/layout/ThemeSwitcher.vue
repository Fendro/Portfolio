<template>
  <img
    :src="image"
    alt="Theme toggle"
    class="size-12 rounded-full border-2 border-surface-700 dark:bg-surface-200"
    @click="preference.toggleTheme()"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import BtnDarkModeImg from '@/assets/images/ButtonDarkMode.png';
import BtnLightModeImg from '@/assets/images/ButtonLightMode.png';
import { ThemeEnum } from '@/core/enums';
import { usePreferenceStore } from '@/core/stores';

const preference = usePreferenceStore();

const image = computed(() =>
  preference.theme === ThemeEnum.Light ? BtnLightModeImg : BtnDarkModeImg,
);
</script>

<style scoped></style>
