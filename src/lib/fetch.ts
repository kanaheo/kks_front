const API_BASE = "http://localhost:8080/api";

export const fetchGet = async (url: string) => {
  const res = await fetch(`${API_BASE + url}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) throw new Error("GET 요청 실패");
  return res.json();
};

export const fetchPost = async (url: string, data?: unknown, returnJson = false) => {
  const options: RequestInit = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data !== undefined && data !== null) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(`${API_BASE + url}`, options);

  if (!res.ok) throw new Error("POST 요청 실패");

  return returnJson ? res.json() : res;
};
