import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Users from "./pages/Users.vue";
import Rooms from "./pages/Rooms.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/users",
      component: Users,
    },
    {
      path: "/rooms",
      component: Rooms,
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
