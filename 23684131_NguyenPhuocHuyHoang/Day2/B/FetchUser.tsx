// 18. Write an async function fetchUser(id) that simulates an API call (resolves a userobject after 1 second).

export interface UserData {
    id: number;
    name: string;
    role: string;
  }
  
  export async function fetchUser(id: number): Promise<UserData> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      id,
      name: `User ${id}`,
      role: 'Developer',
    };
  }