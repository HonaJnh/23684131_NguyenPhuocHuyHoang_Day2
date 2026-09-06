// 15. Call multiple async functions sequentially using await.
import { simulateTask } from "../SimulateTask";

export async function runSequential(): Promise<void> {
    console.time('Sequential');
    const r1 = await simulateTask(1000);
    const r2 = await simulateTask(1000);
    const r3 = await simulateTask(1000);
    console.timeEnd('Sequential'); // Tổng thời gian ~ 3000ms
  }