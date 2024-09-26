<template>
  <template v-if="preference.theme === ThemeEnum.Light">
    <img
      :src="BtnLightModeImg"
      alt="Light Mode toggle"
      class="size-12 rounded-full border-2 border-surface-900 transition duration-200"
      @click="preference.toggleTheme()"
    />
  </template>
  <template v-else>
    <img
      :src="BtnDarkModeImg"
      alt="Dark Mode toggle"
      class="size-12 rounded-full border-2 border-surface-900 transition duration-200"
      @click="preference.toggleTheme()"
    />
  </template>
</template>

<script setup lang="ts">
import BtnDarkModeImg from '@/assets/images/ButtonDarkMode.png';
import BtnLightModeImg from '@/assets/images/ButtonLightMode.png';
import { ThemeEnum } from '@/core/enums';
import { usePreferenceStore } from '@/core/stores';

const preference = usePreferenceStore();
</script>

<style scoped></style>
