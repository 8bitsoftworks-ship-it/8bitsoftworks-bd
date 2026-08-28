export default function FilterChips({
  options,
  active,
  onChange,
  className = "",
  chipClassName = "",
  activeClassName = "",
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`${chipClassName} ${
            active === o ? activeClassName || chipClassName : chipClassName
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
