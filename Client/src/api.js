export async function getItems() {
  try {
    const res = await fetch("/api/items");
    if (!res.ok) {
      const msg = await res.text();
      throw new Error(msg || "Failed to fetch items");
    }
    return res.json();
  } catch (error) {
    throw new Error(error.message || "Network error while fetching items");
  }
}

export async function addItem(name) {
  const res = await fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Failed to add item");
  }
  return res.json();
}
