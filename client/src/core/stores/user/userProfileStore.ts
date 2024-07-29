import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import { ref } from 'vue';

import type { LoginResponse } from '@/api/dto';

export interface UserProfile {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}

export const useUserProfileStore = defineStore('userProfile', () => {
  const token: Ref<string | undefined> = ref(undefined);
  const email: Ref<string | undefined> = ref(undefined);
  const firstname: Ref<string | undefined> = ref(undefined);
  const lastname: Ref<string | undefined> = ref(undefined);
  const username: Ref<string | undefined> = ref(undefined);

  function authenticationToken() {
    return token.value;
  }

  function isAuthenticated() {
    return token.value !== undefined;
  }

  function storeLoginResponse(payload: LoginResponse) {
    token.value = payload.token;
    email.value = payload.userProfile.email;
    firstname.value = payload.userProfile.firstname;
    lastname.value = payload.userProfile.lastname;
    username.value = payload.userProfile.username;
  }

  function userProfile(): Partial<UserProfile> {
    return {
      email: email.value,
      firstname: firstname.value,
      lastname: lastname.value,
      username: username.value,
    };
  }

  function $reset() {
    token.value = undefined;
    email.value = undefined;
    firstname.value = undefined;
    lastname.value = undefined;
    username.value = undefined;
  }

  return {
    authenticationToken,
    isAuthenticated,
    storeLoginResponse,
    userProfile,
    $reset,
  };
});
