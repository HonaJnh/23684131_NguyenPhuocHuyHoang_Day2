// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
import { simulateTask } from "./SimulateTask";

export function runParallelTasks(): void {
    Promise.all([
      simulateTask(500).then(() => 'Task 1 done'),
      simulateTask(1000).then(() => 'Task 2 done'),
      simulateTask(700).then(() => 'Task 3 done'),
    ]).then((results: string[]) => {
      console.log('Promise.all results:', results);
    });
  }
  