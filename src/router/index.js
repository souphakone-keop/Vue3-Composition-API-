import { createRouter, createWebHistory } from "vue-router";
import show_users from "../views/show_users.vue";
import add_user from "../views/add_user.vue";
import edit_user from "../views/edit_user.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/Vue3-Composition-API-/",
      component: show_users,
    },
    {
      path: "/Vue3-Composition-API-/add-user",
      component: add_user,
    },
    {
      path: "/Vue3-Composition-API-/edit-user/:id",
      component: edit_user,
    },
  ],
});

export default router;
