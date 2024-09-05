<template>
  <div class="carousel">
    <div
      class="carousel-inner"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        class="carousel-item"
        v-for="(slide, index) in carouselSlides"
        :key="index"
      >
        <img :src="slide.image" :alt="slide.alt" />
        <div class="flex justify-between">
          <Tag
            :value="slide.projectDescription.name"
            :severity="'secondary'"
            style="right: 5px; top: 5px"
          />
          <a :href="slide.projectSourceUrl" target="_blank">
            <Button
              :label="
                userPreferences.language === LanguageEnum.English
                  ? 'View source'
                  : 'Voir le code source'
              "
            />
          </a>
          <ProjectDescription
            :name="slide.projectDescription.name"
            :description="slide.projectDescription.description"
            :technologies="slide.projectDescription.technologies"
          />
        </div>
      </div>
    </div>
    <button
      class="carousel-control prev"
      @click="
        () => {
          nextSlide(carouselSlides.length);
          $emit('changeSlide');
        }
      "
    >
      ‹
    </button>
    <button
      class="carousel-control next"
      @click="
        () => {
          nextSlide(carouselSlides.length);
          $emit('changeSlide');
        }
      "
    >
      ›
    </button>
  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import { ref } from 'vue';

import { LanguageEnum } from '@/core/enums';
import { useUserPreferenceStore } from '@/core/stores';
import ProjectDescription, {
  type ProjectDescriptionProps,
} from '@/infrastructure/components/projects/ProjectDescription.vue';

export interface CarouselSlide {
  image: string;
  alt: string;
  projectSourceUrl: string;
  projectDescription: ProjectDescriptionProps;
}

export interface MockCarouselProps {
  carouselSlides: CarouselSlide[];
}

export interface MockCarouselEmits {
  (e: 'changeSlide'): void;
}

defineProps<MockCarouselProps>();
defineEmits<MockCarouselEmits>();

const userPreferences = useUserPreferenceStore();

const currentIndex = ref(0);

const nextSlide = (slideCount: number) => {
  if (currentIndex.value < slideCount - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevSlide = (slideCount: number) => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = slideCount - 1;
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 600px;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel img {
  display: block;
  width: 100%;
  height: auto;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}
</style>
