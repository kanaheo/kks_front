const API_BASE = "http://localhost:8080/api";

export const fetchGet = async (url: string) => {
  const fullUrl = `${API_BASE}${url}`;
  const res = await fetch(fullUrl, {
    method: "GET",
    credentials: "include",
  });

  const contentType = res.headers.get("content-type");

  if (!res.ok) {
    throw new Error(`[GET 실패] ${res.status}: ${fullUrl}`);
  }

  if (!contentType || !contentType.includes("application/json")) {
    throw new Error(`[GET 실패] JSON 응답 아님: ${fullUrl}`);
  }

  return res.json();
};

export const fetchPost = async (url: string, data?: unknown, returnJson = false) => {
  const isFormData = data instanceof FormData;

  const options: RequestInit = {
    method: "POST",
    credentials: "include",
    headers: isFormData
      ? undefined // ✅ FormData일 때는 Content-Type 자동 설정되게 냅둬야 함
      : {
          "Content-Type": "application/json",
        },
    body: isFormData ? data : JSON.stringify(data),
  };

  const res = await fetch(`${API_BASE + url}`, options);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "POST 요청 실패");
  }

  return returnJson ? res.json() : res;
};

export const fetchGetWithCookie = async (url: string, cookieHeader: string) => {
  const fullUrl = `${API_BASE}${url}`;
  const res = await fetch(fullUrl, {
    method: "GET",
    headers: {
      Cookie: cookieHeader,
    },
    cache: "no-store", // 항상 최신 데이터
  });

  const contentType = res.headers.get("content-type");

  if (!res.ok) {
    throw new Error(`[GET 실패] ${res.status}: ${fullUrl}`);
  }

  if (!contentType || !contentType.includes("application/json")) {
    throw new Error(`[GET 실패] JSON 아님: ${fullUrl}`);
  }

  return res.json();
};
