import { defineStore } from 'pinia';
import { computed } from 'vue';

import en from '@/assets/text/en.json';
import fr from '@/assets/text/fr.json';
import { LanguageEnum } from '@/core/enums';
import { usePreferenceStore } from '@/core/stores/preferenceStore';

export const useLocalizationStore = defineStore('localizationStore', () => {
  const _preference = usePreferenceStore();
  const _getLocalizedText = () => {
    return _preference.language == LanguageEnum.English ? en : fr;
  };

  const home = computed(() => _getLocalizedText()['home']);
  const projects = computed(() => _getLocalizedText()['projects']);
  const ui = computed(() => _getLocalizedText()['ui']);

  return {
    home,
    projects,
    ui,
  };
});
