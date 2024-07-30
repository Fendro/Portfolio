import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import { computed, ref } from 'vue';

import { LanguageEnum, ThemeEnum } from '@/core/enums';

export interface UserPreferences {
  language: LanguageEnum;
  theme: ThemeEnum;
}

export const useUserPreferenceStore = defineStore('userPreferenceStore', () => {
  const _language: Ref<LanguageEnum> = ref(LanguageEnum.French);
  const _theme: Ref<ThemeEnum> = ref(ThemeEnum.Light);

  const language = computed(() => _language.value);
  const theme = computed(() => _theme.value);

  function toggleTheme() {
    _theme.value =
      _theme.value == ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;
  }

  function update(payload: UserPreferences) {
    _language.value = payload.language;
    _theme.value = payload.theme;
  }

  function $reset() {
    _language.value = LanguageEnum.French;
    _theme.value = ThemeEnum.Light;
  }

  return {
    theme,
    toggleTheme,
    $reset,
  };
});
