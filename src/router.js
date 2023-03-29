import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },/* 
  {
    path: "/:anything(.*)",
    component: Detail, => 404페이지
  }, */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 