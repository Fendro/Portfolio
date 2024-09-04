<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #title>
      <p class="text-center">Register</p>
    </template>
    <template #content>
      <FloatLabel class="my-6">
        <label for="username"> Username </label>
        <InputText id="username" class="w-full" v-model="data.username" />
      </FloatLabel>
      <FloatLabel class="my-6">
        <label for="email"> Email </label>
        <InputText id="email" class="w-full" v-model="data.email" />
      </FloatLabel>
      <FloatLabel class="my-6">
        <label for="password"> Password </label>
        <Password id="password" class="w-full" v-model="data.password" />
      </FloatLabel>
      <FloatLabel class="my-6">
        <label for="passwordConfirm"> Confirm password </label>
        <Password
          id="passwordConfirm"
          class="w-full"
          v-model="data.passwordConfirmation"
        />
      </FloatLabel>
      <Button label="Submit" class="w-full" :severity="'success'" outlined />
    </template>
    <template #footer>
      <Divider />
      <p class="my-2 text-center">Already have an account?</p>
      <Button
        label="Login"
        class="w-full"
        :severity="'info'"
        outlined
        @click="router.push(RouteEnum.Login)"
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

import type { RegisterPayload } from '@/api/dto';
import { RouteEnum } from '@/core/enums';
import router from '@/infrastructure/router';

const data = ref({
  email: '',
  password: '',
  passwordConfirmation: '',
  username: '',
});

export interface CardRegisterEmits {
  (e: 'submit', data: RegisterPayload): void;
}

defineEmits<CardRegisterEmits>();
</script>

<style scoped></style>
