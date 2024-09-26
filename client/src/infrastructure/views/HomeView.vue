<template>
  <section class="mx-auto max-w-4xl px-4 py-8 text-center">
    <div class="mb-4 text-2xl font-bold">
      {{ localization['home']['welcome'] }}
    </div>
    <h1 class="my-4 text-3xl text-primary-900 dark:text-primary-100">
      {{ localization['home']['introduction-title'] }}
    </h1>
    <p class="text-lg leading-relaxed text-primary-900 dark:text-primary-100">
      {{ localization['home']['introduction-description'] }}
    </p>
    <div class="mt-16">
      <div class="my-4 font-bold">
        {{ localization['ui']['button']['download'] }}
      </div>
      <div class="flex flex-col justify-center gap-4">
        <a :href="CV" target="_blank" class="min-w-fit">
          <Button :label="localization['home']['cv']" />
        </a>
        <a :href="Rapport" target="_blank" class="min-w-fit">
          <Button :label="localization['home']['training-report']" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

import CV from '@/assets/files/Curriculum Vitae.pdf';
import Rapport from "@/assets/files/Rapport d'alternance.pdf";
import { useLocalizationStore, usePreferenceStore } from '@/core/stores';
import HomeView from '@/infrastructure/views/HomeView';

const localization = useLocalizationStore();

const setup = new HomeView();
</script>

<style scoped></style>
