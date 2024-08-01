import 'vue-router';

// shims-vue.d.ts
declare module '*.vue' {}
declare module '@/assets/themes/*';
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean;
  }
}
