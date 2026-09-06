import { simulateTask } from "../SimulateTask";

// 12. Write an async function that calls simulateTask(2000) and logs the result.
export async function runSimulateAsync(): Promise<void> {
    const result = await simulateTask(2000);
    console.log('simulateTask completed with:', result);
  }