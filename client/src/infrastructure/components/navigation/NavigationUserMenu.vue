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
import Menu from 'primevue/menu';
import type { MenuItem } from 'primevue/menuitem';
import { ref } from 'vue';

import { useProfileStore } from '@/core/stores';
import ButtonUserProfile from '@/infrastructure/components/shared/buttons/ButtonUserProfile.vue';

const isMenuToggled = ref(false);
const userProfileStore = useProfileStore();

function toggleMenu() {
  isMenuToggled.value = !isMenuToggled.value;
}

export interface NavigationUserMenuProps {
  guestMenuItems: MenuItem[];
  userMenuItems: MenuItem[];
}

defineProps<NavigationUserMenuProps>();
</script>

<style scoped></style>
