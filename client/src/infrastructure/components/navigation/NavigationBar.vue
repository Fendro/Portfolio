<template>
  <Menu :model="navigationItems">
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
    </template>
  </Menu>
</template>

<script setup lang="ts">
import Menu from 'primevue/menu';
import type { MenuItem } from 'primevue/menuitem';
import { computed } from 'vue';

import { RouteEnum } from '@/core/enums';
import { useLocalizationStore } from '@/core/stores';

const localized = useLocalizationStore();

const navigationItems = computed<MenuItem[]>(() => [
  {
    label: localized.text['ui']['navigation']['home'],
    icon: 'pi pi-home',
    route: RouteEnum.Home,
  },
  {
    label: localized.text['ui']['navigation']['projects'],
    icon: 'pi pi-code',
    route: RouteEnum.Projects,
  },
  {
    label: localized.text['ui']['navigation']['reviews'],
    icon: 'pi pi-pen-to-square',
    route: RouteEnum.Reviews,
  },
]);
</script>

<style scoped></style>
