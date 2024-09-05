<template>
  <template v-if="userPreferences.language === LanguageEnum.French">
    <img
      :src="frFlagImage"
      alt="Language toggle"
      class="size-12"
      @click="userPreferences.toggleLanguage()"
    />
  </template>
  <template v-else>
    <img
      :src="ukFlagImage"
      alt="Language toggle"
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
