export type SantaListProtector<T> = T extends (...args: any) => unknown
  ? T
  : T extends object
  ? { readonly [P in keyof T]: SantaListProtector<T[P]> }
  : T;
