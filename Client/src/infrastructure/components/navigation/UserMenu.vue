<template>
  <div class="card flex justify-content-center">
    <UserProfileButton @focusin="toggle" @focusout="toggle" />
    <Menu :model="items" v-if="isToggled">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import UserProfileButton from "@/infrastructure/components/buttons/UserProfileButton.vue";

const router = useRouter();
const isToggled = ref(false);
const items = ref([
  {
    label: "Login",
    icon: "pi pi-arrow-right",
    route: "/login",
  },
]);

function toggle() {
  isToggled.value = !isToggled.value;
}
</script>

<style scoped></style>
