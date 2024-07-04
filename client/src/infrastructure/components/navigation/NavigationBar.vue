<template>
  <Menu :model="items">
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
import { RouteEnum } from "@/core/enums";
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    route: RouteEnum.Home,
  },
  {
    label: "Projects",
    icon: "pi pi-code",
    route: RouteEnum.Projects,
  },
  {
    label: "Reviews",
    icon: "pi pi-pen-to-square",
    route: RouteEnum.Reviews,
  },
]);
</script>

<style scoped></style>
