<template>
  <section>
    <h1>{{ HomeTextContent.welcome[userPreference.language] }}</h1>
    <h2>
      {{ HomeTextContent['introduction-title'][userPreference.language] }}
    </h2>
    <div>
      {{ HomeTextContent['introduction-description'][userPreference.language] }}
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeTextContent from '@/assets/text/home.json';
import { useUserPreferenceStore } from '@/core/stores';
import HomeView from '@/infrastructure/views/HomeView';

const userPreference = useUserPreferenceStore();
const setup = new HomeView();
</script>

<style scoped></style>
