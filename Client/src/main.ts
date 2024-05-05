import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import InputText from "primevue/inputtext";
import Menubar from "primevue/menubar";

import "primevue/resources/themes/aura-light-green/theme.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.component("Avatar", Avatar);
app.component("Badge", Badge);
app.component("InputText", InputText);
app.component("Menubar", Menubar);

app.mount("#app");
