export default function Logo({ size = 28 }) {
  return (
    <span className="logo" style={{ fontSize: size }}>
      <svg viewBox="0 0 24 32" width="0.7em" height="0.95em" aria-hidden="true">
        <path d="M14 0 0 18h9l-3 14L24 12h-9z" fill="currentColor" />
      </svg>
      Livra
    </span>
  );
}
