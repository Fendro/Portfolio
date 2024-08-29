<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #title>
      <p class="text-center">Login</p>
    </template>
    <template #content>
      <FloatLabel class="my-6">
        <label for="email">Email</label>
        <InputText id="email" class="w-full" v-model="loginPayload.email" />
      </FloatLabel>
      <Password
        v-model="loginPayload.password"
        @keyup="(event) => console.log(event.target.value)"
      />
      <Button
        label="Submit"
        class="w-full"
        :severity="'success'"
        outlined
        @click="$emit('submit', loginPayload)"
      />
    </template>
    <template #footer>
      <Divider />
      <p class="my-2 text-center">Do not have an account yet?</p>
      <Button
        label="Register"
        class="w-full"
        :severity="'info'"
        outlined
        @click="router.push(RouteEnum.Register)"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { ref } from 'vue';

import type { LoginPayload } from '@/api/dto';
import { RouteEnum } from '@/core/enums';
import router from '@/infrastructure/router';

const loginPayload = ref({
  email: '',
  password: '',
});

export interface CardLoginEmits {
  (e: 'submit', loginPayload: LoginPayload): void;
}

defineEmits<CardLoginEmits>();
</script>

<style scoped></style>
