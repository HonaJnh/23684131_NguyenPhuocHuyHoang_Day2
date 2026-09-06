// 21. Use fetch to get data from a public API (e.g.,https://jsonplaceholder.typicode.com/todos/1).

export interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  export async function getTodo(id = 1): Promise<TodoItem> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  
    const data: TodoItem = await res.json();
    return data;
  }