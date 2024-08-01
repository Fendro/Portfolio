import { createRouter, createWebHistory } from 'vue-router';

import { RouteEnum } from '@/core/enums';
import { useUserProfileStore } from '@/core/stores/user/userProfileStore';
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
  const userProfileStore = useUserProfileStore();
  if (to.meta.requiresAuth && !userProfileStore.isAuthenticated)
    return { name: RouteEnum.Login };
  if (to.path === RouteEnum.Login && userProfileStore.isAuthenticated)
    return { name: RouteEnum.Home };
});

export default router;
