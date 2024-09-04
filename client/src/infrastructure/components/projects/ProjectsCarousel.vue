<template>
  <Carousel
    :value="projects"
    :responsive-options="responsiveOptions"
    :circular="true"
  >
    <template #item="slotProps">
      <div
        class="m-2 rounded border border-surface-200 p-4 dark:border-surface-700"
      >
        <div class="relative mx-auto">
          <img
            :src="slotProps.data.imageSource"
            :alt="slotProps.data.name"
            class="object-fit w-full rounded"
          />
          <Tag
            :value="slotProps.data.tag"
            :severity="'secondary'"
            class="absolute"
            style="left: 5px; top: 5px"
          />
        </div>
        <div class="flex justify-between">
          <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
          <Button
            :label="'Try'"
            class="w-fit"
            @click="slotProps.data.onClick"
          />
        </div>
      </div>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Carousel, { type CarouselResponsiveOptions } from 'primevue/carousel';
import Tag from 'primevue/tag';

export interface CarouselProjectsProps {
  projects: CarouselProjectElement[];
  responsiveOptions: CarouselResponsiveOptions[] | undefined;
}

export interface CarouselProjectElement {
  imageSource: string;
  name: string;
  onClick: Function;
  tag: string;
}

defineProps<CarouselProjectsProps>();
</script>
