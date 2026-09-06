// 17. Use for await...of to iterate over an array of Promises.
export async function iteratePromises(): Promise<void> {
    const promises = [
      Promise.resolve(10),
      new Promise<number>((resolve) => setTimeout(() => resolve(20), 500)),
      new Promise<number>((resolve) => setTimeout(() => resolve(30), 200)),
    ];
  
    for await (const val of promises) {
      console.log('for await...of value:', val);
    }
  }