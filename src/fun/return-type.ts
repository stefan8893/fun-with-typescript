function add(a: number, b: number): number {
  return a + b;
}

type AddedType = ReturnType<typeof add>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type MyAddedType = MyReturnType<typeof add>;
