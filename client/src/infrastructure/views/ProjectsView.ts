import { type Reactive, reactive } from 'vue';

export interface ProjectsViewState {}

export default class ProjectsView {
  readonly state: Reactive<ProjectsViewState> = reactive({});

  constructor() {}
}
