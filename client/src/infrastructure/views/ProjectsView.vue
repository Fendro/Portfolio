<template>
  <section>
    <MockCarousel
      :carousel-slides="slides"
      class="self-center"
      @changeSlide="() => console.log('changed')"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import AlgorithmImage from '@/assets/images/Algorithm.png';
import CSSImage from '@/assets/images/CSS.png';
import CSharpImage from '@/assets/images/CSharp.png';
import Connect4Image from '@/assets/images/Connect4.png';
import DockerImage from '@/assets/images/Docker.png';
import ECommerceImage from '@/assets/images/ECommerce.png';
import EFCoreImage from '@/assets/images/EFCore.png';
import ExpressImage from '@/assets/images/Express.png';
import GrafanaImage from '@/assets/images/Grafana.png';
import HTMLImage from '@/assets/images/HTML.png';
import JavaScriptImage from '@/assets/images/JavaScript.png';
import MongoDBImage from '@/assets/images/MongoDB.png';
import MySQLImage from '@/assets/images/MySQL.png';
import NETImage from '@/assets/images/NET.png';
import NodeImage from '@/assets/images/NodeJS.png';
import PHPImage from '@/assets/images/PHP.png';
import PortfolioImage from '@/assets/images/Portfolio.png';
import ReactImage from '@/assets/images/React.png';
import SequelizeImage from '@/assets/images/Sequelize.png';
import SoloSailImage from '@/assets/images/SoloSail.svg';
import TypeScriptImage from '@/assets/images/TypeScript.png';
import VueImage from '@/assets/images/Vue.png';
import projectTextContent from '@/assets/text/projects.json';
import { diManager } from '@/diManager.ts';
import MockCarousel, {
  type CarouselSlide,
} from '@/infrastructure/components/projects/ProjectCarousel.vue';

const preferences = diManager.preferenceStore;

const imgResolver = (technologie: string) => {
  switch (technologie) {
    case 'C#':
      return CSharpImage;
    case '.NET':
      return NETImage;
    case 'EF Core':
      return EFCoreImage;
    case 'MySQL':
      return MySQLImage;
    case 'Grafana':
      return GrafanaImage;
    case 'Docker':
      return DockerImage;
    case 'Vue':
      return VueImage;
    case 'Express':
      return ExpressImage;
    case 'TypeScript':
      return TypeScriptImage;
    case 'Sequelize':
      return SequelizeImage;
    case 'JavaScript':
      return JavaScriptImage;
    case 'HTML':
      return HTMLImage;
    case 'CSS':
      return CSSImage;
    case 'Node':
      return NodeImage;
    case 'React':
      return ReactImage;
    case 'MongoDB':
      return MongoDBImage;
    case 'PHP':
      return PHPImage;
    default:
      return '';
  }
};

const slides = ref<CarouselSlide[]>([
  {
    image: SoloSailImage,
    alt: 'SoloSail project slide',
    projectSourceUrl: projectTextContent.SoloSail.sourceUrl,
    projectDescription: {
      name: projectTextContent.SoloSail.name[preferences.language],
      description:
        projectTextContent.SoloSail.description[preferences.language],
      technologies: projectTextContent.SoloSail.technologies.map(
        (technology) => ({ name: technology, image: imgResolver(technology) }),
      ),
    },
  },
  {
    image: PortfolioImage,
    alt: 'Portfolio project slide',
    projectSourceUrl: projectTextContent.Portfolio.sourceUrl,
    projectDescription: {
      name: projectTextContent.Portfolio.name[preferences.language],
      description:
        projectTextContent.Portfolio.description[preferences.language],
      technologies: projectTextContent.Portfolio.technologies.map(
        (technology) => ({ name: technology, image: imgResolver(technology) }),
      ),
    },
  },
  {
    image: Connect4Image,
    alt: 'Connect 4 project slide',
    projectSourceUrl: projectTextContent.Connect4.sourceUrl,
    projectDescription: {
      name: projectTextContent.Connect4.name[preferences.language],
      description:
        projectTextContent.Connect4.description[preferences.language],
      technologies: projectTextContent.Connect4.technologies.map(
        (technology) => ({ name: technology, image: imgResolver(technology) }),
      ),
    },
  },
  {
    image: ECommerceImage,
    alt: 'E-Commerce project slide',
    projectSourceUrl: projectTextContent['E-Commerce'].sourceUrl,
    projectDescription: {
      name: projectTextContent['E-Commerce'].name[preferences.language],
      description:
        projectTextContent['E-Commerce'].description[preferences.language],
      technologies: projectTextContent['E-Commerce'].technologies.map(
        (technology) => ({ name: technology, image: imgResolver(technology) }),
      ),
    },
  },
  {
    image: AlgorithmImage,
    alt: 'BSQ',
    projectSourceUrl: projectTextContent.BSQ.sourceUrl,
    projectDescription: {
      name: projectTextContent['BSQ'].name[preferences.language],
      description: projectTextContent['BSQ'].description[preferences.language],
      technologies: projectTextContent.BSQ.technologies.map((technology) => ({
        name: technology,
        image: imgResolver(technology),
      })),
    },
  },
]);
</script>

<style scoped></style>
