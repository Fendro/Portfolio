<template>
  <Avatar
    v-if="isAuthenticated()"
    image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
    class=""
    shape="circle"
    v-ripple
  />
  <Button
    v-else
    v-ripple
    icon="pi pi-user"
    rounded
    outlined
    aria-label="User Profile"
  />
</template>

<script setup lang="ts">
import { useUserProfileStore } from "@/core/stores/user/userProfileStore";
import Avatar from "primevue/avatar";

const { isAuthenticated } = useUserProfileStore();
</script>

<style scoped></style>
