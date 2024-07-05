<template>
  <Carousel
    :value="projects"
    :responsive-options="responsiveOptions"
    :circular="true"
  >
    <template #item="slotProps">
      <div class="border-1 surface-border border-round m-2 p-3">
        <div class="mb-3">
          <div class="relative mx-auto">
            <img
              :src="slotProps.data.imageSource"
              :alt="slotProps.data.name"
              class="border-round object-fit w-full"
            />
            <Tag
              :value="slotProps.data.tag"
              :severity="'secondary'"
              class="absolute"
              style="left: 5px; top: 5px"
            />
          </div>
        </div>
        <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
      </div>
    </template>
  </Carousel>
</template>

<script setup>
import Carousel from 'primevue/carousel';
import { ref } from 'vue';

import csImage from '@/assets/images/CSharp.png';
import jsImage from '@/assets/images/JS.png';
import phpImage from '@/assets/images/PHP.png';
import rorImage from '@/assets/images/ROR.png';

const projects = ref([
  {
    name: 'SoloSail',
    imageSource: csImage,
    tag: 'C#',
  },
  {
    name: 'Connect 4',
    imageSource: jsImage,
    tag: 'JavaScript',
  },
  {
    name: 'Algo',
    imageSource: phpImage,
    tag: 'PHP',
  },
  {
    name: 'MedievalRPG',
    imageSource: rorImage,
    tag: 'Ruby on Rails',
  },
]);

const responsiveOptions = ref([
  {
    breakpoint: '1535px',
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: '1279px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '639px',
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
