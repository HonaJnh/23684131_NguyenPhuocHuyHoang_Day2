// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
export async function multiplyByThreeDelayed(n: number): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return n * 3;
  }