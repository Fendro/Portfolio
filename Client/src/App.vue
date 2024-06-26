<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="container mx-auto flex">
    <nav>
      <Navbar class="sticky top-4" />
    </nav>

    <main class="flex flex-col flex-1">
      <RouterView />
      <Toast position="bottom-right" />
    </main>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
}
</style>
