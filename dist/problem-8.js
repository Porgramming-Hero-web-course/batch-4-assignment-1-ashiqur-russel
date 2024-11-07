"use strict";
function validateKeys(obj, keys) {
    return keys.every((key) => key in obj);
}
const person = { name: "Alice", age: 25, email: "alice@example.com" };
validateKeys(person, ["name", "age"]);
