const BASE_URL = "http://127.0.0.1:8000/api/"; // Adjust if needed

// Helper to build headers
function buildHeaders(auth = true, isJson = true) {
  const headers = {};
  if (isJson) headers["Content-Type"] = "application/json";
  if (auth) {
    const token = localStorage.getItem("access");
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

// GET request
export async function apiGet(url, auth = true) {
  const res = await fetch(BASE_URL + url, {
    method: "GET",
    headers: buildHeaders(auth, true),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) throw data || { detail: "GET request failed" };
  return data;
}

// POST request
export async function apiPost(url, body = {}, auth = true) {
  const res = await fetch(BASE_URL + url, {
    method: "POST",
    headers: buildHeaders(auth, true),
    body: JSON.stringify(body),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) throw data || { detail: "POST request failed" };
  return data;
}

// PUT request
export async function apiPut(url, body = {}, auth = true) {
  const res = await fetch(BASE_URL + url, {
    method: "PUT",
    headers: buildHeaders(auth, true),
    body: JSON.stringify(body),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) throw data || { detail: "PUT request failed" };
  return data;
}

// DELETE request
export async function apiDelete(url, auth = true) {
  const res = await fetch(BASE_URL + url, {
    method: "DELETE",
    headers: buildHeaders(auth, true),
  });

  // If 204 No Content, return true
  if (res.status === 204) return true;

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) throw data || { detail: "DELETE request failed" };
  return true;
}
