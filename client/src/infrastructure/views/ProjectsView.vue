<template>
  <section>
    <MockCarousel
      :carousel-slides="slides"
      @changeSlide="() => console.log('changed')"
      class="self-center"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import csImage from '@/assets/images/CSharp.png';
import jsImage from '@/assets/images/JS.png';
import phpImage from '@/assets/images/PHP.png';
import projectTextContent from '@/assets/text/projects.json';
import { useUserPreferenceStore } from '@/core/stores';
import MockCarousel, {
  type CarouselSlide,
} from '@/infrastructure/components/projects/ProjectCarousel.vue';
import ProjectsView from '@/infrastructure/views/ProjectsView';

const userPreferences = useUserPreferenceStore();

const slides = ref<CarouselSlide[]>([
  {
    image: csImage,
    alt: 'SoloSail project slide',
    projectSourceUrl: 'https://google.com',
    projectDescription: {
      name: projectTextContent.SoloSail.name[userPreferences.language],
      description:
        projectTextContent.SoloSail.description[userPreferences.language],
      technologies: [{ name: 'c#', image: '' }],
    },
  },
  {
    image: jsImage,
    alt: 'Connect 4 project slide',
    projectSourceUrl: 'https://yahoo.com',
    projectDescription: {
      name: projectTextContent.Connect4.name[userPreferences.language],
      description:
        projectTextContent.Connect4.description[userPreferences.language],
      technologies: [{ name: 'c#', image: '' }],
    },
  },
  {
    image: phpImage,
    alt: 'E-Commerce project slide',
    projectSourceUrl: 'https://discord.com',
    projectDescription: {
      name: projectTextContent['E-Commerce'].name[userPreferences.language],
      description:
        projectTextContent['E-Commerce'].description[userPreferences.language],
      technologies: [{ name: 'JavaScript', image: '' }],
    },
  },
  {
    image: phpImage,
    alt: 'BSQ',
    projectSourceUrl: 'https://discord.com',
    projectDescription: {
      name: projectTextContent['BSQ'].name[userPreferences.language],
      description:
        projectTextContent['BSQ'].description[userPreferences.language],
      technologies: [{ name: 'PHP', image: '' }],
    },
  },
]);

const setup = new ProjectsView();
</script>

<style scoped></style>
