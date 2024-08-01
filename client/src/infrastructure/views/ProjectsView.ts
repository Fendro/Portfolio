export interface ProjectsViewEmits {
  (e: ''): never;
}

export interface ProjectsViewProps {}

export default class ProjectsView {
  constructor(
    protected readonly emits: ProjectsViewEmits,
    protected readonly props: ProjectsViewProps,
  ) {}
}
