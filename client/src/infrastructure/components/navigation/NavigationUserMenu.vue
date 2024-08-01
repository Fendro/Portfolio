<template>
  <div class="card justify-content-center flex">
    <div @click="toggleMenu">
      <ButtonUserProfile />
    </div>
    <Menu
      :model="userProfileStore.isAuthenticated ? userMenuItems : guestMenuItems"
      v-if="isMenuToggled"
      class="absolute right-1/2 top-12 min-w-min translate-x-1/2 transform"
    >
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
        >
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { RouteEnum } from '@/core/enums';
import { AuthenticationService, FetchService } from '@/core/services';
import { useUserProfileStore } from '@/core/stores/user/userProfileStore';
import ButtonUserProfile from '@/infrastructure/components/buttons/ButtonUserProfile.vue';
import router from '@/infrastructure/router';

const isMenuToggled = ref(false);
const userProfileStore = useUserProfileStore();
const authenticationService = new AuthenticationService(new FetchService());

const guestMenuItems = ref([
  {
    label: 'Login',
    icon: 'pi pi-arrow-right',
    route: RouteEnum.Login,
    command: () => {
      console.log('clicked login');
      authenticationService.loginAsync({
        email: 'placeholder',
        password: 'placeholder',
      });
    },
  },
]);
const userMenuItems = ref([
  {
    label: 'Account',
    icon: 'pi pi-arrow-right',
    route: RouteEnum.Account,
    command: () => console.log('clicked account'),
  },
  {
    label: 'Logout',
    icon: 'pi pi-arrow-right',
    command: () => {
      authenticationService.logout();
      router.push(RouteEnum.Home);
    },
  },
]);

function toggleMenu() {
  isMenuToggled.value = !isMenuToggled.value;
}
</script>

<style scoped></style>
