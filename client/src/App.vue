<template>
  <div id="theme" :class="userPreferences.theme">
    <div
      class="flex h-screen w-screen justify-center overflow-hidden bg-primary-100 transition duration-200 dark:bg-primary-900 xl:gap-4 2xl:gap-8"
    >
      <nav class="sticky top-0 min-w-52">
        <NavigationBar
          class="absolute left-1/2 top-4 z-navigation -translate-x-1/2"
          :items="navigationItems"
        />
      </nav>
      <main
        class="flex flex-1 flex-col gap-1 overflow-y-auto pt-4 text-color sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
      >
        <RouterView class="w-full" />
        <ModalShelf class="sticky bottom-0 mt-auto" />
      </main>
      <nav class="sticky top-0 min-w-52">
        <NavigationUserMenu
          class="absolute right-1/2 top-4 z-navigation translate-x-1/2"
          :guest-menu-items="guestMenuItems"
          :user-menu-items="userMenuItems"
        />
      </nav>
    </div>
    <Toast position="bottom-right" />
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import Toast from 'primevue/toast';
import { type Ref, onUnmounted, ref } from 'vue';
import { RouterView } from 'vue-router';

import { RouteEnum } from '@/core/enums';
import { AuthenticationService, FetchService } from '@/core/services';
import { useUserPreferenceStore } from '@/core/stores';
import ModalShelf from '@/infrastructure/components/ModalShelf.vue';
import NavigationBar from '@/infrastructure/components/navigation/NavigationBar.vue';
import NavigationUserMenu from '@/infrastructure/components/navigation/NavigationUserMenu.vue';
import router from '@/infrastructure/router';

const userPreferences = useUserPreferenceStore();
const authenticationService = new AuthenticationService(new FetchService());

const navigationItems = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: RouteEnum.Home,
  },
  {
    label: 'Projects',
    icon: 'pi pi-code',
    route: RouteEnum.Projects,
  },
  {
    label: 'Reviews',
    icon: 'pi pi-pen-to-square',
    route: RouteEnum.Reviews,
  },
]);

const guestMenuItems: Ref<MenuItem[]> = ref([
  {
    label: 'Login',
    icon: 'pi pi-arrow-right',
    route: RouteEnum.Login,
  },
  {
    label: 'Toggle theme',
    icon: 'pi pi-arrow-right',
    command: () => {
      userPreferences.toggleTheme();
    },
  },
]);

const userMenuItems: Ref<MenuItem[]> = ref([
  {
    label: 'Account',
    icon: 'pi pi-arrow-right',
    route: RouteEnum.Account,
  },
  {
    label: 'Logout',
    icon: 'pi pi-arrow-right',
    command: () => {
      authenticationService.logout();
      router.push(RouteEnum.Home);
    },
  },
  {
    label: 'Toggle theme',
    icon: 'pi pi-arrow-right',
    command: () => {
      userPreferences.toggleTheme();
    },
  },
]);

// const toggleInterval = setInterval(userPreferences.toggleTheme, 2000);
// onUnmounted(() => {
//   clearInterval(toggleInterval);
// });
</script>

<style scoped></style>
