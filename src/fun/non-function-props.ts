type AnyFunction = (...args: unknown[]) => unknown;

type NonFunctionProps<T> = {
  [K in keyof T]: T[K] extends AnyFunction ? never : T[K];
};

type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends AnyFunction ? never : K;
}[keyof T];

type User = {
  firstName: string;
  lastName: string;
  fullName: () => string;
};

type UserWithoutFunctions = NonFunctionProps<User>;

type UserWithoutFunctionsKeys = NonFunctionKeys<User>;
