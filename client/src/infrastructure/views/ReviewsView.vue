<template>
  <section class="grid">
    <Textarea
      v-bind:disabled="!isAuthenticated()"
      v-bind:invalid="containsProfanity"
      @input="checkForProfanity"
      auto-resize
      class="mx-2 max-h-80 min-h-20"
    />
    <Button label="Leave a review" />
  </section>
</template>

<script setup lang="ts">
import Textarea from 'primevue/textarea';
import { ref } from 'vue';

import { useUserProfileStore } from '@/core/stores/user/userProfileStore';

const { isAuthenticated } = useUserProfileStore();
const containsProfanity = ref(false);
const checkForProfanity = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement;
  containsProfanity.value = textarea.value.includes('fuck');
};
</script>

<style scoped></style>
