import { defineStore } from 'pinia';
import { computed } from 'vue';

import en from '@/assets/text/en.json';
import fr from '@/assets/text/fr.json';
import { LanguageEnum } from '@/core/enums';
import { usePreferenceStore } from '@/core/stores/preferenceStore';

export const useLocalizationStore = defineStore('localizationStore', () => {
  const _preference = usePreferenceStore();

  const text = computed(() => {
    switch (_preference.language) {
      case LanguageEnum.French:
        return fr;
      case LanguageEnum.English:
        return en;
      default:
        throw new Error('Unknown language');
    }
  });

  return { text };
});
