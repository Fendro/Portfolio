// shims-vue-router.d.ts
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    guestOnly?: boolean;
    requiresAuth?: boolean;
  }
}
