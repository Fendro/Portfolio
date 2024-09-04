import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import { computed, ref } from 'vue';

import { LanguageEnum, ThemeEnum } from '@/core/enums';

export interface UserPreferences {
  language: LanguageEnum;
  theme: ThemeEnum;
}

export const useUserPreferenceStore = defineStore('userPreferenceStore', () => {
  const _isUserSystemDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  const _language: Ref<LanguageEnum> = ref(LanguageEnum.French);
  const _theme: Ref<ThemeEnum> = ref(
    _isUserSystemDarkMode ? ThemeEnum.Dark : ThemeEnum.Light,
  );

  const language = computed(() => _language.value);
  const theme = computed(() => _theme.value);

  function toggleLanguage() {
    _language.value =
      _language.value == LanguageEnum.French
        ? LanguageEnum.English
        : LanguageEnum.French;
  }

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
    _theme.value = _isUserSystemDarkMode ? ThemeEnum.Dark : ThemeEnum.Light;
  }

  return {
    language,
    theme,
    toggleLanguage,
    toggleTheme,
    $reset,
  };
});
