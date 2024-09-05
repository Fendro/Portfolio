<template>
  <section>
    <ProjectsCarousel
      :projects="projects"
      :responsive-options="responsiveOptions"
      class="max-w-fit"
    />
    <div>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </div>
  </section>
</template>

<script setup lang="ts">
import csImage from '@/assets/images/CSharp.png';
import jsImage from '@/assets/images/JS.png';
import phpImage from '@/assets/images/PHP.png';
import rorImage from '@/assets/images/ROR.png';
import ProjectsTextContent from '@/assets/text/projects.json';
import { useUserPreferenceStore } from '@/core/stores';
import ProjectsCarousel from '@/infrastructure/components/projects/ProjectsCarousel.vue';
import ProjectsView from '@/infrastructure/views/ProjectsView';

const userPreferences = useUserPreferenceStore();
const projects = [
  {
    imageSource: csImage,
    name: ProjectsTextContent.SoloSail.name[userPreferences.language],
    onClick: () => {
      console.log('SoloSail');
    },
    tag: ProjectsTextContent.SoloSail.technologies[0],
  },
  {
    imageSource: jsImage,
    name: ProjectsTextContent['E-Commerce'].name[userPreferences.language],
    onClick: () => {},
    tag: ProjectsTextContent['E-Commerce'].technologies[0],
  },
  {
    imageSource: phpImage,
    name: ProjectsTextContent.Connect4.name[userPreferences.language],
    onClick: () => {},
    tag: ProjectsTextContent.Connect4.technologies[0],
  },
  {
    imageSource: rorImage,
    name: ProjectsTextContent.BSQ.name[userPreferences.language],
    onClick: () => {},
    tag: ProjectsTextContent.BSQ.technologies[0],
  },
];
const responsiveOptions = [
  {
    breakpoint: '1535px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '1279px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '639px',
    numVisible: 1,
    numScroll: 1,
  },
];

const setup = new ProjectsView();
</script>

<style scoped></style>
