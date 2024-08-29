<template>
  <section>
    <CarouselProjects
      :projects="setup.state.projects"
      :responsive-options="setup.state.responsiveOptions"
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
import CarouselProjects from '@/infrastructure/components/carousels/CarouselProjects.vue';
import ProjectsView from '@/infrastructure/views/ProjectsView';

const setup = new ProjectsView();
</script>

<style scoped></style>
