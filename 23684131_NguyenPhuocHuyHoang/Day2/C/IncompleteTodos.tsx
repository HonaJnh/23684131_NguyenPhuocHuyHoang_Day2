// 23. Write an async function that fetches a list of todos and filters out those that are not completed.

import { TodoItem } from "./FetchTodo";

export async function getIncompleteTodos(): Promise<TodoItem[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    const list: TodoItem[] = await res.json();
    
    return list.filter((item) => !item.completed);
  }