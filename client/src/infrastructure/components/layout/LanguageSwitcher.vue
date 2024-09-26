<template>
  <template v-if="preference.language === LanguageEnum.French">
    <img
      :src="FlagFrImg"
      alt="Language toggle"
      class="size-12"
      @click="preference.toggleLanguage()"
    />
  </template>
  <template v-else>
    <img
      :src="FlagUkImg"
      alt="Language toggle"
      class="size-12"
      @click="preference.toggleLanguage()"
    />
  </template>
</template>

<script setup lang="ts">
import FlagFrImg from '@/assets/images/FlagFrance.png';
import FlagUkImg from '@/assets/images/FlagUnitedKingdom.png';
import { LanguageEnum } from '@/core/enums';
import { useUserPreferenceStore } from '@/core/stores';

const preference = useUserPreferenceStore();
</script>

<style scoped></style>
