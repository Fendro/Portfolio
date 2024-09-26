<template>
  <div id="theme" :class="preference.theme">
    <div
      class="flex h-screen w-screen flex-col justify-center overflow-hidden bg-primary-50 transition duration-200 dark:bg-primary-950 md:flex-row xl:gap-4 2xl:gap-8"
    >
      <nav
        class="sticky bottom-0 flex justify-center pb-4 md:min-w-52 md:gap-4 md:pb-0"
      >
        <NavigationBar
          class="left-1/2 top-4 z-navigation -translate-x-1/2 md:absolute"
        />
      </nav>
      <main
        class="flex flex-1 flex-col gap-1 overflow-y-auto pt-4 text-color sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
      >
        <RouterView class="w-full" />
        <ModalShelf class="sticky bottom-0 mt-auto" />
      </main>
      <nav
        class="fixed right-0 top-0 z-navigation flex gap-4 p-4 md:static md:min-w-52 md:flex-col md:gap-4"
      >
        <ThemeSwitcher />
        <LanguageSwitcher />
      </nav>
    </div>
    <Toast position="bottom-right" />
  </div>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast';
import { RouterView } from 'vue-router';

import { usePreferenceStore } from '@/core/stores';
import LanguageSwitcher from '@/infrastructure/components/layout/LanguageSwitcher.vue';
import ModalShelf from '@/infrastructure/components/layout/ModalShelf.vue';
import ThemeSwitcher from '@/infrastructure/components/layout/ThemeSwitcher.vue';
import NavigationBar from '@/infrastructure/components/navigation/NavigationBar.vue';

const preference = usePreferenceStore();
</script>

<style scoped></style>
