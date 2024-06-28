<template>
  <Button
    v-ripple
    v-if="userProfileStore"
    icon="pi pi-user"
    rounded
    outlined
    aria-label="User Profile"
  />
  <Avatar
    v-else
    image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
    class=""
    shape="circle"
    v-ripple
  />
</template>

<script setup lang="ts">
import { inject } from "vue";

const userProfileStore = inject("UserProfileStore");
</script>

<style scoped></style>
