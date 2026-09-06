// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
export async function fetchWithTimeout<T>(
    promise: Promise<T>,
    timeoutMs = 2000
  ): Promise<T> {
    const timer = new Promise<never>((_, reject) => {
      setTimeout(
        () => reject(new Error(`API call exceeded ${timeoutMs}ms limit!`)),
        timeoutMs
      );
    });
  
    return Promise.race([promise, timer]);
  }