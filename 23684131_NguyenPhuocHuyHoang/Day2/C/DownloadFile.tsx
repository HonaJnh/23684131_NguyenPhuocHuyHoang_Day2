// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.

export async function downloadFile(fileName: string): Promise<string> {
    console.log(`Bắt đầu tải ${fileName}...`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(`Đã tải xong: ${fileName}`);
  
    return `file://${fileName}`;
  }