export const RouteEnum = {
  Account: '/account',
  Home: '/',
  Login: '/login',
  Projects: '/projects',
  Register: '/register',
  Reviews: '/reviews',
} as const;

export type RouteEnum = ObjectValues<typeof RouteEnum>;
