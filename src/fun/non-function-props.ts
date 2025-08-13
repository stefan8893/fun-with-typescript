type AnyFunction = (...args: unknown[]) => unknown;

type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends AnyFunction ? never : K;
}[keyof T];

type OnlyFunctionKeys<T> = {
  [K in keyof T]: T[K] extends AnyFunction ? K : never;
}[keyof T];

type User = {
  firstName: string;
  lastName: string;
  fullName: () => string;
};

type UserWithoutFunctionsKeys = NonFunctionKeys<User>;

type UserWithFunctionsOnlyKeys = OnlyFunctionKeys<User>;

type UserWithoutFunctions = Omit<User, OnlyFunctionKeys<User>>;
