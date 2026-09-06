// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).

import { simulateTask } from "./SimulateTask";
export function demoFinally(): void {
    simulateTask(600)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log('Done'); // Luôn luôn chạy
      });
  }
  