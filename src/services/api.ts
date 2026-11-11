
const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function apiRequest<T>(
  endpoint: string
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
