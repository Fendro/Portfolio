// Vue
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/infrastructure/router";

// PrimeVue
import "@/assets/app.css";
import Aura from "@/assets/themes/aura";
import PrimeVue from "primevue/config";
import AutoComplete from "primevue/autocomplete";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import Carousel from "primevue/carousel";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import Toast from "primevue/toast";
import ToggleButton from "primevue/togglebutton";
import ToastService from "primevue/toastservice";
import Ripple from "primevue/ripple";

// Own
import Navbar from "@/infrastructure/components/navigation/Navbar.vue";
import ConfirmButton from "@/infrastructure/components/buttons/ConfirmButton.vue";
import CancelButton from "@/infrastructure/components/buttons/CancelButton.vue";

// App builder
const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(PrimeVue, {
  pt: Aura,
  ripple: true,
  unstyled: true,
});
app.use(ToastService);

// PrimeVue
app.component("AutoComplete", AutoComplete);
app.component("Avatar", Avatar);
app.component("Badge", Badge);
app.component("Carousel", Carousel);
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.component("Menu", Menu);
app.component("Toast", Toast);
app.component("ToggleButton", ToggleButton);
app.directive("ripple", Ripple);

// Own
app.component("Navbar", Navbar);
app.component("ConfirmButton", ConfirmButton);
app.component("CancelButton", CancelButton);

// Mounting
app.mount("#app");
