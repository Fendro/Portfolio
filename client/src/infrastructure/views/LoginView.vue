<template>
  <section class="flex h-full items-center justify-center">
    <LoaderLayer :is-loading="setup.state.submitting">
      <LoginCard @submit="setup.login" />
    </LoaderLayer>
  </section>
</template>

<script setup lang="ts">
import {
  AuthenticationService,
  FetchService,
  ToastService,
} from '@/core/services';
import LoginCard from '@/infrastructure/components/login/LoginCard.vue';
import LoaderLayer from '@/infrastructure/components/shared/loaders/LoaderLayer.vue';
import LoginView from '@/infrastructure/views/LoginView';

const setup = new LoginView(
  new AuthenticationService(new FetchService()),
  new ToastService(),
);
</script>

<style scoped></style>
