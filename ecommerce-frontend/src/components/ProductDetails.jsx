import { useState } from "react";

export default function ProductDetails() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: "15px" }}>
      <button 
        onClick={() => setOpen(!open)}
        style={{ padding: "8px 15px", cursor: "pointer" }}
      >
        {open ? "Hide Details" : "Show Details"}
      </button>

      {open && (
        <p style={{ marginTop: "10px", color: "#444" }}>
          This is a great product. It has amazing features and high quality!
        </p>
      )}
    </div>
  );
}
