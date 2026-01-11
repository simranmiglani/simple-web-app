export function validateName(name) {
  const trimmed = String(name ?? "").trim();
  if (trimmed.length < 2) return "Name must be at least 2 characters.";
  if (trimmed.length > 60) return "Name must be 60 characters or less.";
  return "";
}
