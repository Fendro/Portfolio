<template>
  <transition name="fade">
    <div class="overlay" v-if="isLoading">
      <div class="spinner"></div>
    </div>
  </transition>
  <slot></slot>
</template>

<script setup lang="ts">
export interface LoaderLayerProps {
  isLoading: boolean;
}

defineProps<LoaderLayerProps>();
</script>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
