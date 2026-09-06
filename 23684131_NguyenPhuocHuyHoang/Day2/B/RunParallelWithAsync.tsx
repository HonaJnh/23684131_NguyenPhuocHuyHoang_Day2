import { simulateTask } from "../SimulateTask";

export async function runParallelWithAsync(): Promise<string[]> {
    console.time('Parallel');
    const results = await Promise.all([
      simulateTask(1000),
      simulateTask(1000),
      simulateTask(1000),
    ]);
    console.timeEnd('Parallel'); // Tổng thời gian chỉ ~ 1000ms
    return results;
  }