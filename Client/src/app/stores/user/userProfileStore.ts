import { defineStore } from "pinia";
import { ref } from "vue";
import type { InjectionKey, Ref } from "vue";
import type { useUserPreferenceStore } from "@/app/stores/user/userPreferencesStore";

export interface UserProfile {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}

export const useUserProfileStoreKey = Symbol() as InjectionKey<
  typeof useUserPreferenceStore
>;

export const useUserProfileStore = defineStore("userProfile", () => {
  const isAuthenticated: Ref<boolean> = ref(false);
  const email: Ref<string | undefined> = ref(undefined);
  const firstname: Ref<string | undefined> = ref(undefined);
  const lastname: Ref<string | undefined> = ref(undefined);
  const username: Ref<string | undefined> = ref(undefined);

  function userProfile(): Partial<UserProfile> {
    return {
      email: email.value,
      firstname: firstname.value,
      lastname: lastname.value,
      username: username.value,
    };
  }

  function login() {
    isAuthenticated.value = true;
  }

  function logout() {
    isAuthenticated.value = false;
  }

  function update(payload: UserProfile) {
    email.value = payload.email;
    firstname.value = payload.firstname;
    lastname.value = payload.lastname;
    username.value = payload.username;
  }
});
