// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.
import { sleep } from "./WaitFiveSeconds";

export async function fetchWithRetry<T>(
    fn: () => Promise<T>,
    retries = 3
  ): Promise<T> {
    try {
      return await fn();
    } catch (error) {
      if (retries <= 1) throw error;
  
      console.log(`Gọi lại thất bại, số lần thử còn: ${retries - 1}`);
      await sleep(1000); // Backoff 1s
  
      return fetchWithRetry(fn, retries - 1);
    }
  }