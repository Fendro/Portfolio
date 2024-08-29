<template>
  <section class="flex h-full items-center justify-center">
    <LoaderLayer :is-loading="setup.state.submitting">
      <CardLogin @submit="(data) => setup.login(data)" />
    </LoaderLayer>
  </section>
</template>

<script setup lang="ts">
import {
  AuthenticationService,
  FetchService,
  ToastService,
} from '@/core/services';
import CardLogin from '@/infrastructure/components/cards/CardLogin.vue';
import LoaderLayer from '@/infrastructure/components/loaders/LoaderLayer.vue';
import LoginView from '@/infrastructure/views/LoginView';

const setup = new LoginView(
  new AuthenticationService(new FetchService()),
  new ToastService(),
);
</script>

<style scoped></style>
