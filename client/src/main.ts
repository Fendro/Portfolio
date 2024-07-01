import { createApp, provide } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/core/router";

import "@/assets/app.css";
import Aura from "@/assets/themes/aura";
import PrimeVue from "primevue/config";
import AutoComplete from "primevue/autocomplete";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import Button from "primevue/button";
import Carousel from "primevue/carousel";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import Toast from "primevue/toast";
import ToggleButton from "primevue/togglebutton";
import ToastService from "primevue/toastservice";
import Ripple from "primevue/ripple";

import { useUserProfileStore } from "@/core/stores/user/userProfileStore";
import { useUserPreferenceStore } from "@/core/stores/user/userPreferencesStore";
import CancelButton from "@/infrastructure/components/buttons/CancelButton.vue";
import ConfirmButton from "@/infrastructure/components/buttons/ConfirmButton.vue";
import ModalButton from "@/infrastructure/components/buttons/ModalButton.vue";

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
  .component("AutoComplete", AutoComplete)
  .component("Avatar", Avatar)
  .component("Badge", Badge)
  .component("Button", Button)
  .component("CancelButton", CancelButton)
  .component("ConfirmButton", ConfirmButton)
  .component("Carousel", Carousel)
  .component("Dropdown", Dropdown)
  .component("InputText", InputText)
  .component("Menu", Menu)
  .component("ModalButton", ModalButton)
  .component("Toast", Toast)
  .component("ToggleButton", ToggleButton)
  .directive("ripple", Ripple)
  .provide("UserProfileStore", useUserProfileStore())
  .provide("userPreferenceStore", useUserPreferenceStore())
  .mount("#app");
