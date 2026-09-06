// 8. Create a Promise chain: square the number 2, then double it, then add 5.
 
export function runPromiseChain(): void {
    Promise.resolve(2)
      .then((n) => n * n) // 2 * 2 = 4
      .then((n) => n * 2) // 4 * 2 = 8
      .then((n) => n + 5) // 8 + 5 = 13
      .then((finalVal) => {
        console.log('Promise Chain result:', finalVal);
      });
  }
  