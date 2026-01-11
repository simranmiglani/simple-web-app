export default function ItemList({ items, loading }) {
  if (loading) return <p className="small">Loading…</p>;

  if (!items.length) {
    return <p className="small">No items yet — add one above.</p>;
  }

  return (
    <ul style={{ margin: 0, paddingLeft: 18 }}>
      {items.map((it) => (
        <li key={it.id} style={{ padding: "6px 0" }}>
          <b>{it.name}</b> <span className="small">· {new Date(it.createdAt).toLocaleString()}</span>
        </li>
      ))}
    </ul>
  );
}
