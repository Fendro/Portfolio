<template>
  <div
    id="theme"
    :class="preference.theme"
    class="transition duration-200 text-color"
  >
    <div
      class="flex h-full min-h-screen w-full flex-col bg-primary-50 dark:bg-primary-950"
    >
      <NavigationBar class="sticky top-0 z-navigation p-1" />

      <main class="flex w-full grow flex-col gap-1">
        <RouterView />
        <ModalShelf class="sticky bottom-0 mt-auto" />
      </main>
    </div>
    <Toast position="bottom-right" />
  </div>
</template>

<script lang="ts" setup>
import Toast from 'primevue/toast';
import { RouterView } from 'vue-router';

import { usePreferenceStore } from '@/core/stores';
import ModalShelf from '@/infrastructure/components/layout/ModalShelf.vue';
import NavigationBar from '@/infrastructure/components/navigation/NavigationBar.vue';

const preference = usePreferenceStore();
</script>

<style scoped></style>
