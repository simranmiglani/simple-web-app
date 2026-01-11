import { useEffect, useMemo, useState } from "react";
import { getItems, addItem } from "./api.js";
import Header from "./components/Header.jsx";
import ItemForm from "./components/ItemForm.jsx";
import ItemList from "./components/ItemList.jsx";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const count = useMemo(() => items.length, [items]);

  async function refresh() {
    setError("");
    setLoading(true);
    try {
      const data = await getItems();
      setItems(data.items);
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function onAdd(name) {
    setSaving(true);
    setError("");
    try {
      const created = await addItem(name);
      setItems((prev) => [created.item, ...prev]);
    } catch (e) {
      setError(e.message || "Could not add item");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="container">
      <Header subtitle="A tiny React + Express demo" />

      <div className="card">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>Items</div>
            <div className="small">{count} total</div>
          </div>
          <button onClick={refresh} disabled={loading || saving}>
            Refresh
          </button>
        </div>

        <div style={{ height: 12 }} />

        <ItemForm onAdd={onAdd} disabled={saving} />

        {error ? (
          <p style={{ color: "crimson" }}>{error}</p>
        ) : null}

        <div style={{ height: 12 }} />

        <ItemList items={items} loading={loading} />
      </div>
    </div>
  );
}
