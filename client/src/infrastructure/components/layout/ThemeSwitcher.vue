<template>
  <template v-if="userPreferences.theme === ThemeEnum.Light">
    <img
      v-bind:src="lightModeImage"
      alt="Light Mode toggle"
      class="size-12 rounded-full border-2 border-surface-900 transition duration-200"
      @click="userPreferences.toggleTheme()"
    />
  </template>
  <template v-else>
    <img
      v-bind:src="darkModeImage"
      alt="Dark Mode toggle"
      class="size-12 rounded-full border-2 border-surface-900 transition duration-200"
      @click="userPreferences.toggleTheme()"
    />
  </template>
</template>

<script setup lang="ts">
import darkModeImage from '@/assets/images/dark-mode.png';
import lightModeImage from '@/assets/images/light-mode.png';
import { ThemeEnum } from '@/core/enums';
import { useUserPreferenceStore } from '@/core/stores';

const userPreferences = useUserPreferenceStore();
</script>

<style scoped></style>
