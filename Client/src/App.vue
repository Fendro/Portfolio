<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container mx-auto flex">
    <Navbar />

    <main class="flex flex-col flex-1">
      <RouterView />
      <ConfirmButton></ConfirmButton>
      <CancelButton></CancelButton>
    </main>
  </div>
</template>

<style scoped></style>
