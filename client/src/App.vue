<script setup lang="ts">
import Toast from 'primevue/toast';
import { RouterView } from 'vue-router';

import ModalShelf from '@/infrastructure/components/ModalShelf.vue';
import NavigationBar from '@/infrastructure/components/navigation/NavigationBar.vue';
import NavigationUserMenu from '@/infrastructure/components/navigation/NavigationUserMenu.vue';
</script>

<template>
  <div class="flex h-screen gap-4 overflow-y-scroll">
    <nav class="sticky top-0 h-screen w-52">
      <NavigationBar class="absolute left-1/2 top-4 z-50 -translate-x-1/2" />
    </nav>
    <main class="flex flex-col gap-1 pt-4">
      <RouterView />
      <ModalShelf class="sticky bottom-0 mt-auto" />
    </main>
    <nav class="sticky top-0 h-screen w-52">
      <NavigationUserMenu
        class="absolute right-1/2 top-4 z-50 translate-x-1/2"
      />
    </nav>
  </div>
  <Toast position="bottom-right" />
</template>

<style scoped></style>
