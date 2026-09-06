//  10. Use .finally() to log "Done" when a Promise finishes (success or failure).
export function getNumberTen(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(10), 1000);
    });
  }
  