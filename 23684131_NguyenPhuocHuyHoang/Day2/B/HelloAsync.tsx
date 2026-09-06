// 11. Convert Exercise 1 into async/await.
import { helloAsyncPromise } from "../A/HelloAsync";

export async function getHelloAsync(): Promise<string> {
    const message = await helloAsyncPromise();
    return message;
  }
  