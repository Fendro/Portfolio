// Vue
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// PrimeVue components
import "@/assets/app.css";
import PrimeVue from "primevue/config";
import Aura from "@/assets/themes/aura";
import AutoComplete from "primevue/autocomplete";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import Carousel from "primevue/carousel";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import ToggleButton from "primevue/togglebutton";

// Custom components
import Navbar from "@/components/navbar/Navbar.vue";
import ConfirmButton from "@/components/buttons/ConfirmButton.vue";
import CancelButton from "@/components/buttons/CancelButton.vue";

// PrimeVue directives
import Ripple from "primevue/ripple";

// App builder
const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  pt: Aura,
  ripple: true,
  unstyled: true,
});

// PrimeVue registration
app.component("AutoComplete", AutoComplete);
app.component("Avatar", Avatar);
app.component("Badge", Badge);
app.component("Carousel", Carousel);
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.component("Menu", Menu);
app.component("ToggleButton", ToggleButton);

app.directive("ripple", Ripple);

// Custom registration
app.component("Navbar", Navbar);
app.component("ConfirmButton", ConfirmButton);
app.component("CancelButton", CancelButton);

// Mounting
app.mount("#app");
