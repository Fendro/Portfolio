<template>
  <section>
    <TestComponent message="First component" />
    <TestComponent message="Second component" />
    <TestComponent message="Third component" />
    <TestComponent message="Fourth component" />
    <TestComponent message="Fifth component" />
  </section>
</template>

<script setup lang="ts">
import TestComponent from "@/infrastructure/components/TestComponent.vue";
</script>

<style scoped></style>
