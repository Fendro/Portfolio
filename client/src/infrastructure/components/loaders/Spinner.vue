<template>
  <div class="card justify-content-center flex">
    <ProgressSpinner
      style="width: 50px; height: 50px"
      strokeWidth="8"
      class="fill-surface-0 dark:fill-surface-800"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
</template>

<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner';
</script>

<style scoped></style>
