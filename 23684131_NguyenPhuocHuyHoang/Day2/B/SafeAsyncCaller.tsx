// 13. Handle errors using try/catch with async/await.
import { failPromise } from "../A/FailPromise";

export async function safeAsyncCaller(): Promise<void> {
    try {
      await failPromise();
    } catch (error: any) {
      console.log('Async error caught in try/catch:', error.message);
    }
  }