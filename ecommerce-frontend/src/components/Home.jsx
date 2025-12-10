import React, { useState  } from "react";
import Card from "./Card";

export default function Home() {
  // -----------------------------
  // Dummy Product Data (Day 2)
  // -----------------------------
  const products = [
    {
      title: "SB Dunk ",
      description: "One of the most best seller",
      category: "Sneaker",
      price: "35000",
    },
    {
      title: "Nike T-shirt",
      description: "A black T-shirt with white Nike logo",
      category: "Fashion",
      price: "5000",
    },
    {
      title: "Nike Shoes",
      description: "Comfortable sports shoes",
      category: "Sports",
      price: "10000",
    },
    {
      title: "Nike x Travis Scott",
      description: "Most hyped Sneakers",
      category: "Sneaker",
      price: "100000",
    },
     {
      title: "Nike socks",
      description: "Pure cotten socks.Pack of 3",
      category: "Fashion",
      price: 2000,
    },
  ];

  // -------------------------------------
  // Day 3 — State + Event Handling
  // -------------------------------------

  // Like button state (one per product)
  const [likes, setLikes] = useState(Array(products.length).fill(false));

  // Expand/Collapse description
  const [expand, setExpand] = useState(Array(products.length).fill(false));

  // Increment / Decrement quantity
  const [quantity, setQuantity] = useState(Array(products.length).fill(1));

  // Mark as Purchased / Done
  const [purchased, setPurchased] = useState(Array(products.length).fill(false));

  // Toggle Like Button
  const toggleLike = (index) => {
    const updated = [...likes];
    updated[index] = !updated[index];
    setLikes(updated);
  };

  // Toggle Expand / Collapse description
  const toggleExpand = (index) => {
    const updated = [...expand];
    updated[index] = !updated[index];
    setExpand(updated);
  };

  // Increase Quantity
  const incrementQty = (index) => {
    const updated = [...quantity];
    updated[index] += 1;
    setQuantity(updated);
  };

  // Decrease Quantity
  const decrementQty = (index) => {
    if (quantity[index] > 1) {
      const updated = [...quantity];
      updated[index] -= 1;
      setQuantity(updated);
    }
  };

  // Mark Purchase
  const markPurchased = (index) => {
    const updated = [...purchased];
    updated[index] = !updated[index];
    setPurchased(updated);
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#736cd3ff",
        minHeight: "600px",
      }}
    >
      <h1 style={{ fontSize: "34px", marginBottom: "20px" }}>
        Welcome to Sneakers Elite
      </h1>

      <p style={{ fontSize: "18px" }}>
        Check out our latest products below:
      </p>

      {/* PRODUCT CARDS */}
      <div style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              width: "260px",
              border: "1px solid gray",
              borderRadius: "10px",
              padding: "15px",
              backgroundColor: purchased[index] ? "#0df609ff" : "#b3b9cbff",
            }}
          >
            {/* TITLE */}
            <h2 style={{ fontSize: "20px" }}>{item.title}</h2>

            {/* PRICE */}
            <p style={{ fontWeight: "bold" }}>₹ {item.price}</p>

            {/* Expand / Collapse */}
            <button
              onClick={() => toggleExpand(index)}
              style={{
                backgroundColor: "rgba(77, 46, 107, 0.87)",
                color: "white",
                padding: "5px 10px",
                border: "none",
                marginBottom: "5px",
              }}
            >
              {expand[index] ? "Hide Details" : "Show Details"}
            </button>

            {expand[index] && (
              <p style={{ marginBottom: "10px" }}>{item.description}</p>
            )}

            {/* Like Button */}
            <button
              onClick={() => toggleLike(index)}
              style={{
                backgroundColor: likes[index] ? "#ff4d4d" : "#6f5ae4ff",
                padding: "6px 12px",
                border: "none",
                marginRight: "10px",
                color: "white",
              }}
            >
              {likes[index] ? "♥ Liked" : "♡ Like"}
            </button>

            {/* Quantity Section */}
            <div style={{ margin: "20px 0" }}>
              <button onClick={() => decrementQty(index)}>-</button>
              <span style={{ padding: "0 20px" }}>{quantity[index]}</span>
              <button onClick={() => incrementQty(index)}>+</button>
            </div>

            {/* Mark as Purchased */}
            <button
              onClick={() => markPurchased(index)}
              style={{
                backgroundColor: purchased[index] ? "green" : "blue",
                padding: "6px 12px",
                border: "none",
                color: "white",
                width: "100%",
                marginTop: "10px",
              }}
            >
              {purchased[index] ? "Added to Cart ✓" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
