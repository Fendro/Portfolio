<template>
  <img
    :src="image"
    alt="Language toggle"
    class="size-12"
    @click="preference.toggleLanguage()"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import FlagFrImg from '@/assets/images/FlagFrance.png';
import FlagUkImg from '@/assets/images/FlagUnitedKingdom.png';
import { LanguageEnum } from '@/core/enums';
import { usePreferenceStore } from '@/core/stores';

const preference = usePreferenceStore();

const image = computed(() =>
  preference.language === LanguageEnum.English ? FlagUkImg : FlagFrImg,
);
</script>

<style scoped></style>
