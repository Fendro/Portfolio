export const RouteEnum = {
  Account: '/account',
  Home: '/',
  Login: '/login',
  Projects: '/projects',
  Register: '/register',
  Reviews: '/reviews',
} as const;

export type RouteEnum = (typeof RouteEnum)[keyof typeof RouteEnum];
