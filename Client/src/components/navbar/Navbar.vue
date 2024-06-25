<template>
  <nav class="card flex justify-center">
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
        <a
          v-else
          v-ripple
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-palette",
    route: "/",
  },
  {
    label: "Projects",
    icon: "pi pi-link",
    route: "/projects",
  },
  {
    label: "About",
    icon: "pi pi-home",
    route: "/about",
  },
]);
</script>
