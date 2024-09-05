<template>
  <template v-if="userPreferences.language === LanguageEnum.French">
    <img
      v-bind:src="frFlagImage"
      alt="French Flag"
      class="size-12"
      @click="userPreferences.toggleLanguage()"
    />
  </template>
  <template v-else>
    <img
      v-bind:src="ukFlagImage"
      alt="UK Flag"
      class="size-12"
      @click="userPreferences.toggleLanguage()"
    />
  </template>
</template>

<script setup lang="ts">
import frFlagImage from '@/assets/images/fr-flag.png';
import ukFlagImage from '@/assets/images/uk-flag.png';
import { LanguageEnum } from '@/core/enums';
import { useUserPreferenceStore } from '@/core/stores';

const userPreferences = useUserPreferenceStore();
</script>

<style scoped></style>
