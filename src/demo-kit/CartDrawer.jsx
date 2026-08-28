import QuantityStepper from "./QuantityStepper";

const defaultFormat = (n) => "৳" + n.toLocaleString("en-IN");

export default function CartDrawer({
  open,
  onClose,
  cart,
  format = defaultFormat,
  onCheckout,
  checkoutLabel = "Checkout",
  panelClassName = "bg-white text-ink border-l border-black/10",
  accent = "#000",
  emptyText = "Your cart is empty.",
}) {
  const { items, remove, setQty, total, count } = cart;
  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } ${panelClassName}`}
      >
        <div className="flex items-center justify-between border-b px-5 py-4">
          <span className="font-mono text-[10.5px] uppercase tracking-wide opacity-70">Cart ({count})</span>
          <button onClick={onClose} aria-label="Close cart" className="text-[18px] leading-none opacity-60 hover:opacity-100">
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
          {items.length === 0 && <p className="text-[13px] opacity-60">{emptyText}</p>}
          {items.map((i) => (
            <div key={i.id} className="flex gap-3">
              <div className="h-14 w-14 shrink-0 border border-current/10" style={{ background: i.art || "rgba(0,0,0,0.08)" }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[13px] leading-tight">{i.name}</span>
                  <button
                    onClick={() => remove(i.id)}
                    aria-label="Remove"
                    className="opacity-40 hover:opacity-100 text-[15px] leading-none"
                  >
                    ×
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <QuantityStepper qty={i.qty} onChange={(q) => setQty(i.id, q)} className="border-current/20" />
                  <span className="text-[13px] font-tabular">{format(i.price * i.qty)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[13px] opacity-70">Total</span>
            <span className="text-[16px] font-tabular font-semibold">{format(total)}</span>
          </div>
          <button
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full py-3.5 text-center text-[12px] uppercase tracking-wide transition-opacity hover:opacity-85 disabled:opacity-40"
            style={{ background: accent, color: "#fff" }}
          >
            {checkoutLabel}
          </button>
        </div>
      </aside>
    </>
  );
}
