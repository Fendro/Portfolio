import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import { createApp } from 'vue';

import App from '@/App.vue';
import '@/assets/app.css';
import Aura from '@/assets/themes/aura';
import {
  useLocalizationStore,
  usePreferenceStore,
  useReviewStore,
} from '@/core/stores';
import router from '@/infrastructure/router';

const app = createApp(App);
const pinia = createPinia();

app
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    pt: Aura,
    ripple: true,
    unstyled: true,
  })
  .use(ToastService);

app
  .directive('ripple', Ripple)
  .directive('tooltip', Tooltip)
  .provide('localizationStore', useLocalizationStore())
  .provide('preferenceStore', usePreferenceStore())
  .provide('reviewStore', useReviewStore())
  .mount('#app');
