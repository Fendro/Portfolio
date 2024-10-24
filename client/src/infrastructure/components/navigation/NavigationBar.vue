<template>
  <nav>
    <Menubar :model="navigationItems">
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center gap-2" v-bind="props.action">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </template>
    </Menubar>
  </nav>
</template>

<script lang="ts" setup>
import Menubar from 'primevue/menubar';
import type { MenuItem } from 'primevue/menuitem';
import { computed } from 'vue';

import { RouteEnum } from '@/core/enums';
import { useLocalizationStore } from '@/core/stores';
import LanguageSwitcher from '@/infrastructure/components/layout/LanguageSwitcher.vue';
import ThemeSwitcher from '@/infrastructure/components/layout/ThemeSwitcher.vue';
import router from '@/infrastructure/router';

const localized = useLocalizationStore();

const navigationItems = computed<MenuItem[]>(() => [
  {
    label: localized.text['ui']['navigation']['home'],
    icon: 'pi pi-home',
    command: () => router.push(RouteEnum.Home),
  },
  {
    label: localized.text['ui']['navigation']['projects'],
    icon: 'pi pi-code',
    command: () => router.push(RouteEnum.Projects),
  },
  {
    label: localized.text['ui']['navigation']['reviews'],
    icon: 'pi pi-pen-to-square',
    command: () => router.push(RouteEnum.Reviews),
  },
]);
</script>

<style scoped></style>
