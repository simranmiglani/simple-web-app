import { useState } from "react";

export default function ItemForm({ onAdd, disabled }) {
  const [name, setName] = useState("");

  const canSubmit = name.trim().length >= 2 && !disabled;

  function submit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    onAdd(name.trim());
    setName("");
  }

  return (
    <form onSubmit={submit} className="row">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New item name (min 2 chars)"
        aria-label="New item name"
      />
      <button type="submit" disabled={!canSubmit}>
        {disabled ? "Adding..." : "Add"}
      </button>
      <span className="small">Try: “Milk”, “Coffee”, “Batteries”</span>
    </form>
  );
}
