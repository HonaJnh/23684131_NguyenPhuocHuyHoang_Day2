export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function waitFiveSeconds(): Promise<void> {
  console.log('Bắt đầu chờ 5s...');
  await sleep(5000);
  console.log('Đã kết thúc 5s!');
}