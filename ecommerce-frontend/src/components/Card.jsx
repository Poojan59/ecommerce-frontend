import { useState } from "react";

export default function Card(props) {
  // --- Day 3 States ---
  const [liked, setLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [qty, setQty] = useState(1);

  return (
    <div
      style={{
        width: "350px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0 0 50px rgba(255, 255, 255, 1)",
        marginBottom: "20px",
      }}
    >
      {/* TITLE */}
      <h3>{props.title}</h3>

      {/* LIKE BUTTON */}
      <button
        onClick={() => setLiked(!liked)}
        style={{
          padding: "5px 12px",
          backgroundColor: liked ? "red" : "white",
          color: "white",
          border: "black",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {liked ? "❤️ Added to Cart" : "🤍 Add to Cart"}
      </button>

      {/* PURCHASE BUTTON */}
      <button
        onClick={() => setPurchased(!purchased)}
        style={{
          padding: "5px 12px",
          backgroundColor: purchased ? "blue" : "#000000ff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        {purchased ? "✔ Added to Cart" : "Add to Cart"}
      </button>

      {/* EXPAND / COLLAPSE */}
      <p
        onClick={() => setShowDetails(!showDetails)}
        style={{
          cursor: "pointer",
          color: "#000000ff",
          marginTop: "10px",
          textDecoration: "underline",
        }}
      >
        {showDetails ? "Hide Details ▲" : "Show Details ▼"}
      </p>

      {/* SHOW DETAILS */}
      {showDetails && (
        <>
          <p>{props.description}</p>
          <small>Category: {props.category}</small>
          <h5>Price: ₹{props.price.toLocaleString()}</h5>


          {/* QUANTITY BUTTONS */}
          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              style={{
                padding: "5px 10px",
                marginRight: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              -
            </button>

            <span style={{ fontSize: "25px", marginRight: "10px" }}>{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              style={{
                padding: "5px 10px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
}
