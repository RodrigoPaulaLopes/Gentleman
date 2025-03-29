import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import emitter from "./eventBus";
import router from "./routes";
const app = createApp(App);

app.config.globalProperties.$emitter = emitter

app.use(router);
app.mount("#app");
