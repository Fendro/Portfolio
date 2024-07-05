<template>
  <div class="flex h-screen w-screen justify-center overflow-hidden">
    <nav class="sticky top-0 min-w-52">
      <NavigationBar
        class="z-navigation absolute left-1/2 top-4 -translate-x-1/2"
      />
    </nav>
    <main
      class="flex flex-1 flex-col gap-1 overflow-y-auto pt-4 sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
    >
      <RouterView class="w-full" />
      <ModalShelf class="sticky bottom-0 mt-auto" />
    </main>
    <nav class="sticky top-0 min-w-52">
      <NavigationUserMenu
        class="z-navigation absolute right-1/2 top-4 translate-x-1/2"
      />
    </nav>
  </div>
  <Toast position="bottom-right" />
</template>

<script setup lang="ts">
import Toast from 'primevue/toast';
import { RouterView } from 'vue-router';

import ModalShelf from '@/infrastructure/components/ModalShelf.vue';
import NavigationBar from '@/infrastructure/components/navigation/NavigationBar.vue';
import NavigationUserMenu from '@/infrastructure/components/navigation/NavigationUserMenu.vue';
</script>

<style scoped></style>
