// 24. Write an async function postData() that sends a POST request to a test API.
export async function postData(newPost: {
    title: string;
    body: string;
  }): Promise<any> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
  
    return await res.json();
  }