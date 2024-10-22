// vue.d.ts
import 'vue-router';

declare module '*.vue' {}

declare module 'vue-router' {
  interface RouteMeta {
    guestOnly?: boolean;
    requiresAuth?: boolean;
  }
}
