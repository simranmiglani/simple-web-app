let items = [
  { id: "1", name: "Milk", createdAt: Date.now() - 1000 * 60 * 60 },
  { id: "2", name: "Coffee", createdAt: Date.now() - 1000 * 60 * 30 }
];

function newId() {
  return Math.random().toString(16).slice(2);
}

export function listItems() {
  return [...items].sort((a, b) => b.createdAt - a.createdAt);
}

export function createItem(name) {
  const item = { id: newId(), name, createdAt: Date.now() };
  items = [item, ...items];
  return item;
}
