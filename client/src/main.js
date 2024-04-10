import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { startGame } from "../../../Connect4/dist/index.js";

createApp(App).mount("#app");
startGame();
