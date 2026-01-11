export default function Header({ subtitle }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 26, fontWeight: 800 }}>Simple Web App</div>
      <div className="small">{subtitle}</div>
    </div>
  );
}
