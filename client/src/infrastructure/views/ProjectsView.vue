<template>
  <section>
    <MockCarousel
      :carousel-slides="slides"
      @changeSlide="() => console.log('changed')"
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
    alt: 'Slide 1',
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
    alt: 'Slide 2',
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
    alt: 'Slide 3',
    projectSourceUrl: 'https://discord.com',
    projectDescription: {
      name: projectTextContent['E-Commerce'].name[userPreferences.language],
      description:
        projectTextContent['E-Commerce'].description[userPreferences.language],
      technologies: [{ name: 'c#', image: '' }],
    },
  },
]);

const setup = new ProjectsView();
</script>

<style scoped></style>
