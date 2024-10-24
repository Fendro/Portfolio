<template>
  <section>
    <ProjectCarousel
      :carousel-slides="slides"
      class="self-center"
      @changeSlide="() => console.log('changed')"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import LogoCSharp from '@/assets/images/LogoCSharp.png';
import LogoCss from '@/assets/images/LogoCss.png';
import LogoDocker from '@/assets/images/LogoDocker.png';
import LogoDotNet from '@/assets/images/LogoDotNet.png';
import LogoEfCore from '@/assets/images/LogoEfCore.png';
import LogoExpress from '@/assets/images/LogoExpress.png';
import LogoGrafana from '@/assets/images/LogoGrafana.png';
import LogoHtml from '@/assets/images/LogoHtml.png';
import LogoJavascript from '@/assets/images/LogoJavascript.png';
import LogoMongoDb from '@/assets/images/LogoMongoDb.png';
import LogoMySql from '@/assets/images/LogoMySql.png';
import LogoNodeJs from '@/assets/images/LogoNodeJs.png';
import LogoPhp from '@/assets/images/LogoPhp.png';
import LogoReact from '@/assets/images/LogoReact.png';
import LogoSequelize from '@/assets/images/LogoSequelize.png';
import LogoTypescript from '@/assets/images/LogoTypescript.png';
import LogoVue from '@/assets/images/LogoVue.png';
import ThumbnailAlgorithm from '@/assets/images/ThumbnailAlgorithm.png';
import ThumbnailConnect4 from '@/assets/images/ThumbnailConnect4.png';
import ThumbnailECommerce from '@/assets/images/ThumbnailECommerce.png';
import ThumbnailPortfolio from '@/assets/images/ThumbnailPortfolio.png';
import ThumbnailSoloSail from '@/assets/images/ThumbnailSoloSail.svg';
import { diManager } from '@/diManager.ts';
import ProjectCarousel from '@/infrastructure/components/projects/ProjectCarousel.vue';

const localized = diManager.localizationStore;

const logos = new Map<string, string>([
  ['C#', LogoCSharp],
  ['.NET', LogoDotNet],
  ['EF Core', LogoEfCore],
  ['MySQL', LogoMySql],
  ['Grafana', LogoGrafana],
  ['Docker', LogoDocker],
  ['Vue', LogoVue],
  ['Express', LogoExpress],
  ['TypeScript', LogoTypescript],
  ['Sequelize', LogoSequelize],
  ['JavaScript', LogoJavascript],
  ['HTML', LogoHtml],
  ['CSS', LogoCss],
  ['Node', LogoNodeJs],
  ['React', LogoReact],
  ['MongoDB', LogoMongoDb],
  ['PHP', LogoPhp],
]);

const imgResolver = (technologie: string) => {
  return logos.get(technologie) || '';
};

const slides = ref([
  {
    image: ThumbnailSoloSail,
    alt: 'SoloSail project slide',
    projectSourceUrl: localized.text['projects']['SoloSail']['sourceUrl'],
    projectDescription: {
      name: localized.text['projects']['SoloSail']['name'],
      description: localized.text['projects']['SoloSail']['description'],
      technologies: localized.text['projects']['SoloSail'].technologies.map(
        (technology) => ({
          name: technology,
          image: imgResolver(technology),
        }),
      ),
    },
  },
  {
    image: ThumbnailPortfolio,
    alt: 'Portfolio project slide',
    projectSourceUrl: localized.text['projects']['Portfolio']['sourceUrl'],
    projectDescription: {
      name: localized.text['projects']['Portfolio']['name'],
      description: localized.text['projects']['Portfolio']['description'],
      technologies: localized.text['projects']['Portfolio'].technologies.map(
        (technology) => ({
          name: technology,
          image: imgResolver(technology),
        }),
      ),
    },
  },
  {
    image: ThumbnailConnect4,
    alt: 'Connect 4 project slide',
    projectSourceUrl: localized.text['projects']['Connect4']['sourceUrl'],
    projectDescription: {
      name: localized.text['projects']['Connect4']['name'],
      description: localized.text['projects']['Connect4']['description'],
      technologies: localized.text['projects']['Connect4'].technologies.map(
        (technology) => ({
          name: technology,
          image: imgResolver(technology),
        }),
      ),
    },
  },
  {
    image: ThumbnailECommerce,
    alt: 'E-Commerce project slide',
    projectSourceUrl: localized.text['projects']['E-Commerce']['sourceUrl'],
    projectDescription: {
      name: localized.text['projects']['E-Commerce']['name'],
      description: localized.text['projects']['E-Commerce']['description'],
      technologies: localized.text['projects']['E-Commerce'].technologies.map(
        (technology) => ({
          name: technology,
          image: imgResolver(technology),
        }),
      ),
    },
  },
  {
    image: ThumbnailAlgorithm,
    alt: 'BSQ',
    projectSourceUrl: localized.text['projects']['BSQ']['sourceUrl'],
    projectDescription: {
      name: localized.text['projects']['BSQ']['name'],
      description: localized.text['projects']['BSQ']['description'],
      technologies: localized.text['projects']['BSQ'].technologies.map(
        (technology) => ({
          name: technology,
          image: imgResolver(technology),
        }),
      ),
    },
  },
]);
</script>

<style scoped></style>
