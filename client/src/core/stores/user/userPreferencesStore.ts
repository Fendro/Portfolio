import { LanguageEnum, ThemeEnum } from "@/core/enums";
import { defineStore } from "pinia";
import type { Ref } from "vue";
import { ref } from "vue";

export interface UserPreferences {
  language: LanguageEnum;
  theme: ThemeEnum;
}

export const useUserPreferenceStore = defineStore("userPreferenceStore", () => {
  const language: Ref<LanguageEnum> = ref(LanguageEnum.French);
  const theme: Ref<ThemeEnum> = ref(ThemeEnum.Light);

  function userPreference(): UserPreferences {
    return {
      language: language.value,
      theme: theme.value,
    };
  }

  function update(payload: UserPreferences) {
    language.value = payload.language;
    theme.value = payload.theme;
  }
});
