<template>
  <section class="mx-auto max-w-4xl px-4 py-8 text-center">
    <div class="mb-4 text-2xl font-bold">
      {{ HomeTextContent.welcome[userPreference.language] }}
    </div>
    <h1 class="my-4 text-3xl text-primary-900 dark:text-primary-100">
      {{ HomeTextContent['introduction-title'][userPreference.language] }}
    </h1>
    <p class="text-lg leading-relaxed text-primary-900 dark:text-primary-100">
      {{ HomeTextContent['introduction-description'][userPreference.language] }}
    </p>
    <div class="mt-16">
      <div class="my-4 font-bold">Télécharger</div>
      <div class="flex flex-col justify-center gap-4">
        <a :href="CV" target="_blank">
          <Button :label="'CV'" />
        </a>
        <a :href="Rapport" target="_blank">
          <Button
            :label="
              userPreference.language === LanguageEnum.English
                ? 'Training report'
                : 'Rapport d\'alternance'
            "
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

import CV from '@/assets/files/Curriculum Vitae.pdf';
import Rapport from "@/assets/files/Rapport d'alternance.pdf";
import HomeTextContent from '@/assets/text/home.json';
import { LanguageEnum } from '@/core/enums';
import { useUserPreferenceStore } from '@/core/stores';
import HomeView from '@/infrastructure/views/HomeView';

const userPreference = useUserPreferenceStore();
const setup = new HomeView();
</script>

<style scoped></style>
