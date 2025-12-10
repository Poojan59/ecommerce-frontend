import { useState } from "react";

export default function MarkPurchased() {
  const [done, setDone] = useState(false);

  return (
    <button
      onClick={() => setDone(true)}
      disabled={done}
      style={{
        padding: "8px 15px",
        background: done ? "green" : "#555",
        color: "white",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "10px"
      }}
    >
      {done ? "Purchased ✔️" : "Mark as Purchased"}
    </button>
  );
}
