const BASE_URL = "http://127.0.0.1:8000/api/";

// POST request
export async function apiPost(endpoint, data, auth = true) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = localStorage.getItem("token");
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(BASE_URL + endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  const resData = await response.json();
  if (!response.ok) throw resData;
  return resData;
}

// GET request
export async function apiGet(endpoint, auth = true) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = localStorage.getItem("token");
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(BASE_URL + endpoint, { headers });
  const resData = await response.json();
  if (!response.ok) throw resData;
  return resData;
}
