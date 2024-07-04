<template>
  <div class="card flex justify-content-center">
    <ButtonUserProfile
      @click.prevent="toggleMenu(!isMenuToggled)"
      @focusin="toggleMenu(true)"
      @focusout="toggleMenu(false)"
      @keyup="toggleOnEscape"
    />
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
import { RouteEnum } from "@/core/enums";
import { AuthenticationService } from "@/core/services";
import { useUserProfileStore } from "@/core/stores/user/userProfileStore";
import ButtonUserProfile from "@/infrastructure/components/buttons/ButtonUserProfile.vue";
import { ref } from "vue";

const isMenuToggled = ref(false);
const { isAuthenticated } = useUserProfileStore();
const authenticationService = new AuthenticationService();

const guestMenuItems = ref([
  {
    label: "Login",
    icon: "pi pi-arrow-right",
    route: RouteEnum.Login,
  },
]);
const userMenuItems = ref([
  {
    label: "Account",
    icon: "pi pi-arrow-right",
    route: RouteEnum.Account,
  },
  {
    label: "Logout",
    icon: "pi pi-arrow-right",
    command: () => authenticationService.logout(),
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
