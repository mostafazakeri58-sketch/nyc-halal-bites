const API_URL = "http://localhost:8080";

export async function getMenuItems() {
  const response = await fetch(`${API_URL}/api/menu`);

  if (!response.ok) {
    throw new Error("Unable to load menu");
  }

  return response.json();
}