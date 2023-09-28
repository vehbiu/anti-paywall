// singleton class to interact with nextjs api using fetch

class Api {
  baseUrl: string | undefined;
  constructor() {
    this.baseUrl = "/api"; //||process.env.NEXT_PUBLIC_API_URL;
  }

  async get(path: string) {
    const res = await fetch(`${this.baseUrl}${path}`);
    const data = await res.json();
    return data;
  }

  async post(path: string, body: any) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  }
}

// export default new Api();

export const api = new Api();

export async function getArticle(url: string) {
  return await api.post("/bypass", { url });
}