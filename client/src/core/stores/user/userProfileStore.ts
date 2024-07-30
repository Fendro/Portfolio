import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import { computed, ref } from 'vue';

import type { LoginResponse } from '@/api/dto';

export interface UserProfile {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}

export const useUserProfileStore = defineStore('userProfile', () => {
  const _token: Ref<string | undefined> = ref(undefined);
  const _email: Ref<string | undefined> = ref(undefined);
  const _firstname: Ref<string | undefined> = ref(undefined);
  const _lastname: Ref<string | undefined> = ref(undefined);
  const _username: Ref<string | undefined> = ref(undefined);

  const isAuthenticated = computed(() => _token.value !== undefined);

  const token = computed(() => _token.value);

  const userProfile = computed((): Partial<UserProfile> => {
    return {
      email: _email.value,
      firstname: _firstname.value,
      lastname: _lastname.value,
      username: _username.value,
    };
  });

  function storeLoginResponse(payload: LoginResponse) {
    _token.value = payload.token;
    _email.value = payload.userProfile.email;
    _firstname.value = payload.userProfile.firstname;
    _lastname.value = payload.userProfile.lastname;
    _username.value = payload.userProfile.username;
  }

  function $reset() {
    _token.value = undefined;
    _email.value = undefined;
    _firstname.value = undefined;
    _lastname.value = undefined;
    _username.value = undefined;
  }

  return {
    isAuthenticated,
    token,
    storeLoginResponse,
    userProfile,
    $reset,
  };
});
