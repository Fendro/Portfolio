<template>
  <div class="card justify-content-center flex">
    <div @click="toggleMenu(!isMenuToggled)" @keyup="toggleOnEscape">
      <ButtonUserProfile />
    </div>
    <Menu
      :model="isAuthenticated() ? userMenuItems : guestMenuItems"
      v-if="isMenuToggled"
      class="min-w-min"
    >
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
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

<script setup>
import { ref } from 'vue';

import { RouteEnum } from '@/core/enums';
import { AuthenticationService } from '@/core/services';
import { useUserProfileStore } from '@/core/stores/user/userProfileStore';
import ButtonUserProfile from '@/infrastructure/components/buttons/ButtonUserProfile.vue';
import router from '@/infrastructure/router';

const isMenuToggled = ref(false);
const { isAuthenticated } = useUserProfileStore();
const authenticationService = new AuthenticationService();

const guestMenuItems = ref([
  {
    label: 'Login',
    icon: 'pi pi-arrow-right',
    route: RouteEnum.Login,
    command: () => authenticationService.loginAsync(),
  },
]);
const userMenuItems = ref([
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
]);

function toggleMenu(value) {
  isMenuToggled.value = value;
}

function toggleOnEscape(event) {
  if (event.key === 'Escape') toggleMenu(false);
}
</script>

<style scoped></style>
