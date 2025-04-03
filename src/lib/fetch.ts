const API_BASE = "http://localhost:8080/api";

export const fetchGet = async (url: string) => {
  const res = await fetch(`${API_BASE}/users${url}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) throw new Error("GET 요청 실패");
  return res.json();
};

export const fetchPost = async (url: string, data?: unknown) => {
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

  const res = await fetch(`${API_BASE}/users${url}`, options);

  if (!res.ok) throw new Error("POST 요청 실패");
  return res;
};
