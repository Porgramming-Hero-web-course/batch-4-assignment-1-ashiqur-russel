# How to handle asynchronous operations using async/await over callback/promise TypeScript

<p>I think we all know about Typescript in recent days. TypeScript is a superset of JavaScript, so async/await works the same, but with some extra goodies and type safety. TypeScript enables you to ensure type safety for the expected result and even check for type errors, which helps you detect bugs earlier in the development process.</p>

<p>When we do working with code, sometimes we need to wait for things to finish, like getting data from the internet or waiting for a timer. Instead of using complex code with callbacks or .then() chains, TypeScript offers a simpler way: async and await. These make our code easier to read and understand.</p>

`async/await `is essentially a syntactic sugar for promises, which is to say that the `async/await` keyword is a wrapper over promises. An async function always returns a promise. Even if you omit the Promise keyword, the compiler will wrap your function in an immediately resolved promise.

So, Basically When we use async and await, your code looks like it’s running step-by-step, even though it’s actually waiting in the background.

Lets check the code from below to understand about it...

### Example 1: Fetching Data with Async/Await
Let’s say we want to get data after a delay, like waiting for an API response. Instead of using a callback or <span style="color: blue;">`.then()`</span>, you can use `async` and `await`.

####  **With .then()** 

``` typescript
function getData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from async!");
    }, 1000);
  });
}

getData().then((data) => console.log(data));

```

#### **With Async/Await **

``` typescript
async function fetchAndLogData() {
  const data = await getData();
  console.log(data);
}
fetchAndLogData();


```

Here, In the `async/await` version, the function fetches data in a way that feels like a step-by-step process, but it doesn’t block other operations from happening in the program. Here’s how it works:

When the `fetchAndLogData` function calls await `getData()`, it pauses that function’s execution at that line, waiting for `getData()` to finish. However, this doesn’t stop the rest of the program. Instead, JavaScript places the function on hold, moving it to the background, while other code can keep running.

Once `getData()` completes in this case, after a delay of one second  it sends the result back to `fetchAndLogData`. This lets fetchAndLogData pick up right where it left off, logging the result without any delays caused by other tasks.

By working like this, `async/await `enables each task to wait only for its own result, while the rest of the program remains free to process other work independently. The function doesn’t block or hold up other code, ensuring smooth, efficient execution in the background.
