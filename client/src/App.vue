<script setup lang="ts">
import { RouterView } from "vue-router";
import ModalShelf from "@/infrastructure/components/ModalShelf.vue";
import Navbar from "@/infrastructure/components/navigation/Navbar.vue";
import UserMenu from "@/infrastructure/components/navigation/UserMenu.vue";
</script>

<template>
  <div class="h-screen overflow-y-scroll flex">
    <nav class="sticky top-0 h-screen w-52">
      <Navbar class="absolute top-4 left-1/2 -translate-x-1/2 z-50" />
    </nav>
    <main class="flex-1 flex flex-col pt-4 gap-1">
      <RouterView />
      <ModalShelf class="sticky bottom-0 mt-auto" />
    </main>
    <nav class="sticky top-0 h-screen w-52">
      <UserMenu class="absolute top-4 right-1/2 translate-x-1/2 z-50" />
    </nav>
  </div>
  <Toast position="bottom-right" />
</template>

<style scoped></style>
