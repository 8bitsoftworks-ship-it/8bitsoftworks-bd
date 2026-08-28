export default function QuantityStepper({ qty, onChange, className = "" }) {
  return (
    <div className={`inline-flex items-center border ${className}`}>
      <button onClick={() => onChange(qty - 1)} aria-label="Decrease" className="px-2.5 py-1.5 opacity-70 hover:opacity-100">
        −
      </button>
      <span className="w-8 text-center text-[13px] font-tabular">{qty}</span>
      <button onClick={() => onChange(qty + 1)} aria-label="Increase" className="px-2.5 py-1.5 opacity-70 hover:opacity-100">
        +
      </button>
    </div>
  );
}
