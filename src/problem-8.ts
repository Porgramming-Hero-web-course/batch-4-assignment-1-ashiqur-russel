type Person = {
  name: string;
  age: number;
  email: string;
};

function validateKeys<T extends object>(obj: T, keys: string[]): boolean {
  return keys.every((key) => key in obj);
}

const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
validateKeys(person, ["name", "age"]);
