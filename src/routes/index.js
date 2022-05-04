import { createWebHistory, createRouter } from "vue-router";
import Tasks from "@/views/Tasks.vue";
import Login from "@/views/Login.vue";
import SignIn from "@/views/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
