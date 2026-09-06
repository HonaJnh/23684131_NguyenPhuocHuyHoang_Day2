// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.

import { UserData, fetchUser } from "./FetchUser";

export async function fetchUsers(ids: number[]): Promise<UserData[]> {
    // Chạy song song để tối ưu tốc độ
    const promises = ids.map((id) => fetchUser(id));
    return await Promise.all(promises);
  }