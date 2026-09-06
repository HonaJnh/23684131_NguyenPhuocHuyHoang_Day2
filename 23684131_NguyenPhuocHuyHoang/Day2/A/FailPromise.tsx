//3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.

export function failPromise(): Promise<never> {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Something went wrong')), 1000);
    });
  }
  