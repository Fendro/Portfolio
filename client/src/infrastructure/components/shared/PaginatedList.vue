<template>
  <div>
    <ul
      :class="{
        ['flex-row']: horizontal === true,
        ['flex-wrap']: horizontal === true,
        ['flex-col']: horizontal !== true,
        [`gap-${gap}`]: gap !== undefined,
      }"
      class="flex"
    >
      <template v-if="isFetchingData">
        <template v-for="index in rowsPerPage" :key="index">
          <li>
            <slot :index="index" name="contentSkeleton"></slot>
          </li>
        </template>
      </template>
      <template v-else>
        <template v-for="(item, index) in paginatedItems" :key="index">
          <li>
            <slot :index="index" :item="item" name="content"></slot>
          </li>
        </template>
      </template>
    </ul>
    <Paginator
      :rows="rowsPerPage"
      :totalRecords="totalRecords"
      class="mt-2"
      @page="({ page }) => (paginationIndex = page)"
    />
  </div>
</template>

<script lang="ts" setup>
import Paginator from 'primevue/paginator';
import { computed, ref } from 'vue';

interface PaginatedListProps {
  gap?: number;
  horizontal?: boolean;
  isFetchingData?: boolean;
  items: Array<any>;
  rowsPerPage: number;
}

const props = defineProps<PaginatedListProps>();
const totalRecords = computed(() => props.items.length);

const paginationIndex = ref(0);
const paginatedItems = computed(() =>
  props.items.slice(
    paginationIndex.value * props.rowsPerPage,
    Math.min(
      (paginationIndex.value + 1) * props.rowsPerPage,
      props.items.length,
    ),
  ),
);
</script>

<style scoped></style>
