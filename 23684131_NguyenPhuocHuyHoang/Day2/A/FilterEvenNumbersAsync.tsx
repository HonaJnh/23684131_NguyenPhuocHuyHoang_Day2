// 9. Write a Promise that reads an array after 1 second and filters even numbers.
export function filterEvenNumbersAsync(): Promise<number[]> {
    return new Promise((resolve) => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
      setTimeout(() => {
        const evens = numbers.filter((n) => n % 2 === 0);
        resolve(evens);
      }, 1000);
    });
  }
  