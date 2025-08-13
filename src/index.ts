type Foo = {
  bar: string;
  somethineElse: number;
};

type FooKeys = keyof Foo;

type FooValue = Foo[keyof Foo];

const x: FooKeys = 'somethineElse';

const y: FooValue = 4;
const z: FooValue = 'some';

// ❌ Type 'boolean' is not assignable to type 'FooValue'.
// const bad: FooValue = true;
