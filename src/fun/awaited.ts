type NestedPromises = Promise<Promise<Promise<number>>>;

type ResturnTypeOfNestedPromises = Awaited<NestedPromises>;
