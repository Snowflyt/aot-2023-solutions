export type RemoveNaughtyChildren<O extends object> = {
  [P in keyof O as P extends `naughty_${string}` ? never : P]: O[P];
};
