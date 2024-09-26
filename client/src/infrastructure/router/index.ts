import { createRouter, createWebHistory } from 'vue-router';

import { RouteEnum } from '@/core/enums';
import { useProfileStore } from '@/core/stores';
import HomeView from '@/infrastructure/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouteEnum.Account,
      name: RouteEnum.Account,
      meta: { requiresAuth: true },
      component: () => import('@/infrastructure/views/AccountView.vue'),
    },
    {
      path: RouteEnum.Home,
      name: RouteEnum.Home,
      component: HomeView,
    },
    {
      path: RouteEnum.Login,
      name: RouteEnum.Login,
      meta: { guestOnly: true },
      component: () => import('@/infrastructure/views/LoginView.vue'),
    },
    {
      path: RouteEnum.Projects,
      name: RouteEnum.Projects,
      component: () => import('@/infrastructure/views/ProjectsView.vue'),
    },
    {
      path: RouteEnum.Register,
      name: RouteEnum.Register,
      meta: { guestOnly: true },
      component: () => import('@/infrastructure/views/RegisterView.vue'),
    },
    {
      path: RouteEnum.Reviews,
      name: RouteEnum.Reviews,
      component: () => import('@/infrastructure/views/ReviewsView.vue'),
    },
  ],
});

router.beforeEach((to, from) => {
  const userProfileStore = useProfileStore();
  if (userProfileStore.isAuthenticated) {
    if (to.meta.guestOnly) return false;
  } else if (to.meta.requiresAuth) {
    return { name: RouteEnum.Login };
  }
});

export default router;
