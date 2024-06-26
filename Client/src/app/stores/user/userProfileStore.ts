import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";

export interface UserProfile {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}

export const useUserProfileStore = defineStore("userProfileStore", () => {
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

  function update(payload: UserProfile) {
    email.value = payload.email;
    firstname.value = payload.firstname;
    lastname.value = payload.lastname;
    username.value = payload.username;
  }
});
