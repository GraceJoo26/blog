import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';
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
    children:[
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ]//특정 페이지 안에서 라우트를 나누고 싶을때는 Nested router쓰기
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