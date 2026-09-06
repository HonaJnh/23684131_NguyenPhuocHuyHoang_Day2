// 7. Use Promise.race() to return whichever Promise resolves first.
export function runRaceTasks(): void {
    const fast = new Promise<string>((resolve) =>
      setTimeout(() => resolve('Fast Task (100ms)'), 100)
    );
  
    const slow = new Promise<string>((resolve) =>
      setTimeout(() => resolve('Slow Task (800ms)'), 800)
    );
  
    Promise.race([fast, slow]).then((winner) => {
      console.log('Promise.race winner:', winner);
    });
  }
  