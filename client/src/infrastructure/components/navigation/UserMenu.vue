<template>
  <div class="card flex justify-content-center">
    <UserProfileButton
      @click.prevent="toggleMenu(!isMenuToggled)"
      @focusin="toggleMenu(true)"
      @focusout="toggleMenu(false)"
      @keyup="toggleOnEscape"
    />
    <Menu :model="items" v-if="isMenuToggled">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserProfileButton from "@/infrastructure/components/buttons/UserProfileButton.vue";

const isMenuToggled = ref(false);
const items = ref([
  {
    label: "Login",
    icon: "pi pi-arrow-right",
    route: "/login",
  },
]);

function toggleMenu(value) {
  isMenuToggled.value = value;
}

function toggleOnEscape(event) {
  if (event.key === "Escape") toggleMenu(false);
}
</script>

<style scoped></style>
