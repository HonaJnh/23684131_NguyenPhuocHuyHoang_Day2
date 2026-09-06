// 22. Call the API multiple times and log the results.
import { getTodo } from "./FetchTodo";

export async function fetchMultipleTodos(): Promise<void> {
    const ids = [1, 2, 3];
    const todos = await Promise.all(ids.map((id) => getTodo(id)));
    console.log('Fetched todos list:', todos);
  }