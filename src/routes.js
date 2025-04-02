import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./views/Home/HomeComponent.vue";
import Perfil from "./views/Perfil/Perfil.vue";
import Cart from "./views/Cart/Cart.vue";
import Login from "./views/login/Login.vue";
import Register from "./views/register/Register.vue";
import Products from "./views/products/Products.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/register",
    component: Register,
    name: "register",
  },
  {
    path: "/home",
    component: HomeComponent,
    name: "home",
  },
  {
    path: "/profile",
    component: Perfil,
    name: "profile",
  },
  {
    path: "/cart",
    component: Cart,
    name: "cart",
  },
  {
    path: "/products",
    component: Products,
    name: "products"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
