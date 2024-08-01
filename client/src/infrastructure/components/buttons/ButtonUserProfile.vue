<template>
  <Button
    v-ripple
    icon="pi pi-user"
    rounded
    outlined
    aria-label="User Profile"
    :class="{ 'bg-primary-500': userProfileStore.isAuthenticated }"
  />
</template>

<script setup lang="ts">
import { useUserProfileStore } from '@/core/stores/user/userProfileStore';

const userProfileStore = useUserProfileStore();
</script>

<style scoped></style>
