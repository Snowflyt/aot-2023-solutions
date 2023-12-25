export type AppendGood<O extends object> = {
  [P in keyof O as P extends string ? `good_${P}` : never]: O[P];
};
