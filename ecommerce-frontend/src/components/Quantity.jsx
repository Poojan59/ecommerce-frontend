import { useState } from "react";

export default function Quantity() {
  const [qty, setQty] = useState(1);

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <button 
        onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
        style={{ padding: "5px 12px" }}
      >
        -
      </button>

      <span style={{ fontSize: "10px" }}>{qty}</span>

      <button 
        onClick={() => setQty(qty + 1)}
        style={{ padding: "5px 12px" }}
      >
        +
      </button>
    </div>
  );
}
