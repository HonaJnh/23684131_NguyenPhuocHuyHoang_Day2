//1. Create a Promise that returns the string "Hello Async" after 2 seconds.
export const helloAsyncPromise = (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Hello Async'), 2000);
    });
  };
  