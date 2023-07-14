import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from './router'

// @ts-ignore
import PartSelector from "./build/PartSelector.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia)
    .use(router);
app.component("PartSelector", PartSelector);
app.mount("#app");
