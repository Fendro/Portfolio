import { createPinia } from 'pinia';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import Ripple from 'primevue/ripple';
import Tag from 'primevue/tag';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';

import App from '@/App.vue';
import '@/assets/app.css';
import Aura from '@/assets/themes/aura';
import { useUserPreferenceStore } from '@/core/stores/user/userPreferencesStore';
import { useUserProfileStore } from '@/core/stores/user/userProfileStore';
import ButtonCancel from '@/infrastructure/components/buttons/ButtonCancel.vue';
import ButtonConfirm from '@/infrastructure/components/buttons/ButtonConfirm.vue';
import ButtonModal from '@/infrastructure/components/buttons/ButtonModal.vue';
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
  .component('Button', Button)
  .component('ButtonCancel', ButtonCancel)
  .component('ButtonConfirm', ButtonConfirm)
  .component('ButtonModal', ButtonModal)
  .component('InputText', InputText)
  .component('Menu', Menu)
  .component('Tag', Tag)
  .directive('ripple', Ripple)
  .provide('userProfileStore', useUserProfileStore())
  .provide('userPreferenceStore', useUserPreferenceStore())
  .mount('#app');
