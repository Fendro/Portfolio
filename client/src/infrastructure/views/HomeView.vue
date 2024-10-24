<template>
  <section class="mx-auto max-w-4xl px-4 py-8 text-center">
    <div class="mb-4 text-2xl font-bold">
      {{ localized.text['home']['welcome'] }}
    </div>
    <h1 class="my-4 text-3xl text-primary-900 dark:text-primary-100">
      {{ localized.text['home']['introduction-title'] }}
    </h1>
    <p class="text-lg leading-relaxed text-primary-900 dark:text-primary-100">
      {{ localized.text['home']['introduction-description'] }}
    </p>
    <div class="mt-16">
      <div class="my-4 font-bold">
        {{ localized.text['ui']['button']['download'] }}
      </div>
      <div class="flex flex-col justify-center gap-4">
        <a :href="CV" class="min-w-fit" target="_blank">
          <Button :label="localized.text['home']['cv']" />
        </a>
        <a :href="Rapport" class="min-w-fit" target="_blank">
          <Button :label="localized.text['home']['training-report']" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';

import CV from '@/assets/files/Curriculum Vitae.pdf';
import Rapport from "@/assets/files/Rapport d'alternance.pdf";
import { diManager } from '@/diManager.ts';

const localized = diManager.localizationStore;
</script>

<style scoped></style>
