// 4. Use .then() and .catch() to handle a Promise that returns a random number.
export function handleRandomNumber(): void {
    const randomPromise = new Promise<number>((resolve, reject) => {
      const num = Math.random();
  
      num > 0.3
        ? resolve(num)
        : reject(new Error('Number is too small!'));
    });
  
    randomPromise
      .then((val) => console.log('Random number received:', val))
      .catch((err) => console.error('Lỗi nhận được:', err.message));
  }
  