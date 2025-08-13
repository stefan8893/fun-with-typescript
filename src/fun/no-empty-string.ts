type NoEmptyString<S extends string> = S extends '' ? never : S;

function failOnEmptyString<T extends string>(input: NoEmptyString<T>) {
  if (!input) {
    throw new Error('empty input');
  }
}

// ❌ Argument of type '""' is not assignable to parameter of type 'never'.
// failOnEmptyString('');

failOnEmptyString('foobar');
