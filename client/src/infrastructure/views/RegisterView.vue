<template>
  <section class="flex h-full items-center justify-center">
    <LoaderLayer :is-loading="setup.state.submitting">
      <RegisterCard @submit="(data) => setup.register(data)" />
    </LoaderLayer>
  </section>
</template>

<script setup lang="ts">
import {
  AuthenticationService,
  FetchService,
  ToastService,
} from '@/core/services';
import RegisterCard from '@/infrastructure/components/register/RegisterCard.vue';
import LoaderLayer from '@/infrastructure/components/shared/loaders/LoaderLayer.vue';
import RegisterView from '@/infrastructure/views/RegisterView';

const setup = new RegisterView(
  new AuthenticationService(new FetchService()),
  new ToastService(),
);
</script>

<style scoped></style>
