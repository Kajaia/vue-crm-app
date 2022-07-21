import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/colours.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/js/all.min.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
