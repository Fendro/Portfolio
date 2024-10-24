import { createRouter, createWebHistory } from 'vue-router';

import { RouteEnum } from '@/core/enums';
import HomeView from '@/infrastructure/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouteEnum.Home,
      name: RouteEnum.Home,
      component: HomeView,
    },
    {
      path: RouteEnum.Projects,
      name: RouteEnum.Projects,
      component: () => import('@/infrastructure/views/ProjectsView.vue'),
    },
    {
      path: RouteEnum.Reviews,
      name: RouteEnum.Reviews,
      component: () => import('@/infrastructure/views/ReviewsView.vue'),
    },
  ],
});

export default router;
