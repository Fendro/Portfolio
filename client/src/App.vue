<template>
  <div id="theme" :class="userPreferences.theme">
    <div
      class="flex h-screen w-screen justify-center overflow-hidden bg-primary-100 transition duration-200 dark:bg-primary-900 xl:gap-4 2xl:gap-8"
    >
      <nav class="sticky top-0 min-w-52">
        <NavigationBar
          class="absolute left-1/2 top-4 z-navigation -translate-x-1/2"
        />
      </nav>
      <main
        class="flex flex-1 flex-col gap-1 overflow-y-auto pt-4 text-color sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
      >
        <RouterView class="w-full" />
        <ModalShelf class="sticky bottom-0 mt-auto" />
      </main>
      <nav class="sticky top-0 min-w-52">
        <NavigationUserMenu
          class="absolute right-1/2 top-4 z-navigation translate-x-1/2"
        />
      </nav>
    </div>
    <Toast position="bottom-right" />
  </div>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast';
import { onUnmounted } from 'vue';
import { RouterView } from 'vue-router';

import { useUserPreferenceStore } from '@/core/stores';
import ModalShelf from '@/infrastructure/components/ModalShelf.vue';
import NavigationBar from '@/infrastructure/components/navigation/NavigationBar.vue';
import NavigationUserMenu from '@/infrastructure/components/navigation/NavigationUserMenu.vue';

const userPreferences = useUserPreferenceStore();

const toggleInterval = setInterval(userPreferences.toggleTheme, 2000);
onUnmounted(() => {
  clearInterval(toggleInterval);
});
</script>

<style scoped></style>
