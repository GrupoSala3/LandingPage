export default function Phone({ children, label, className = "" }) {
  return (
    <div className={`phone ${className}`} role="img" aria-label={label}>
      <div className="phone__status" aria-hidden="true">
        <span className="phone__time">9:41</span>
        <span className="phone__icons">
          <i /><i /><i />
        </span>
      </div>
      <div className="phone__body" aria-hidden="true">{children}</div>
    </div>
  );
}
