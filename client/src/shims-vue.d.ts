// shims-vue.d.ts
declare module '*.vue' {}
declare module '@/assets/themes/*';

type ObjectKeys<T> = [keyof T];
type ObjectValues<T> = T[keyof T];
