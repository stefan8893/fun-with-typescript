const someObjectWithNesting = {
  foo: 'foo',
  bar: {
    foo: 'foobar',
    bar: 'bar',
  },
} as const;

type ExtractStringValues<T> = T extends string
  ? T
  : T extends Record<string, unknown>
  ? ExtractStringValues<T[keyof T]>
  : never;

type FooBar = ExtractStringValues<typeof someObjectWithNesting>;
