import type { CarouselResponsiveOptions } from 'primevue/carousel';
import { type Reactive, reactive } from 'vue';

import csImage from '@/assets/images/CSharp.png';
import jsImage from '@/assets/images/JS.png';
import phpImage from '@/assets/images/PHP.png';
import rorImage from '@/assets/images/ROR.png';
import type { CarouselProjectElement } from '@/infrastructure/components/carousels/CarouselProjects.vue';

export interface ProjectsViewState {
  projects: CarouselProjectElement[];
  responsiveOptions: CarouselResponsiveOptions[];
}

export default class ProjectsView {
  readonly state: Reactive<ProjectsViewState> = reactive({
    projects: [
      {
        imageSource: csImage,
        name: 'SoloSail',
        onClick: () => {
          console.log('SoloSail');
        },
        tag: 'C#',
      },
      {
        imageSource: jsImage,
        name: 'Connect 4',
        onClick: () => {},
        tag: 'JavaScript',
      },
      {
        imageSource: phpImage,
        name: 'Algo',
        onClick: () => {},
        tag: 'PHP',
      },
      {
        imageSource: rorImage,
        name: 'MedievalRPG',
        onClick: () => {},
        tag: 'Ruby on Rails',
      },
    ],
    responsiveOptions: [
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
    ],
  });

  constructor() {}
}
