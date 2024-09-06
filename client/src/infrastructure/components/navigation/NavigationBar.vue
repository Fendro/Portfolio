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
import { computed, ref, watch } from 'vue';

import { LanguageEnum, RouteEnum } from '@/core/enums';
import { useUserPreferenceStore } from '@/core/stores';

const userPreferences = useUserPreferenceStore();

const isEnglish = computed(
  () => userPreferences.language === LanguageEnum.English,
);

const navigationItems = ref<MenuItem[]>([
  {
    label: isEnglish.value ? 'Home' : "Page d'acceuil",
    icon: 'pi pi-home',
    route: RouteEnum.Home,
  },
  {
    label: isEnglish.value ? 'Projects' : 'Projets',
    icon: 'pi pi-code',
    route: RouteEnum.Projects,
  },
  {
    label: isEnglish.value ? 'Reviews' : 'Commentaires',
    icon: 'pi pi-pen-to-square',
    route: RouteEnum.Reviews,
  },
]);

watch(isEnglish, (value) => {
  navigationItems.value = [
    {
      label: value ? 'Home' : 'Maison',
      icon: 'pi pi-home',
      route: RouteEnum.Home,
    },
    {
      label: value ? 'Projects' : 'Projets',
      icon: 'pi pi-code',
      route: RouteEnum.Projects,
    },
    {
      label: value ? 'Reviews' : 'Commentaires',
      icon: 'pi pi-pen-to-square',
      route: RouteEnum.Reviews,
    },
  ];
});
</script>

<style scoped></style>
