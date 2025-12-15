import React, { useState } from "react";

export default function Home() {
  // -----------------------------
  // Day 2 —  Product Data
  // -----------------------------
  const products = [
    { title: "SB Dunk", description: "One of the best sellers", category: "Sneaker", price: "35000" },
    { title: "Nike T-shirt", description: "Black T-shirt with Nike logo", category: "Fashion", price: "5000" },
    { title: "Nike Shoes", description: "Comfortable sports shoes", category: "Sports", price: "10000" },
    { title: "Nike x Travis Scott", description: "Most hyped Sneakers", category: "Sneaker", price: "100000" },
    { title: "Nike Socks", description: "Pure cotton socks (Pack of 3)", category: "Fashion", price: "2000" },
  ];

  // --------------------------------------
  // Day 4 — 
  // --------------------------------------
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [success, setSuccess] = useState(false);

  // List of form-submitted items
  const [items, setItems] = useState([]);

  // --------------------------------------
  // Handle Form Submit
  // --------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !price) {
      alert("All fields are required!");
      return;
    }

    const newItem = { title, category, price };

    setItems([...items, newItem]);

    // Clear input fields
    setTitle("");
    setCategory("");
    setPrice("");

    // show success msg temporarily
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  // Delete a single item
  const deleteItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  // Clear ALL items
  const clearAll = () => setItems([]);

  // --------------------------------------
  // Day 3 States (Like, Expand, Qty, Purchased)
  // --------------------------------------
  const [likes, setLikes] = useState(Array(products.length).fill(false));
  const [expand, setExpand] = useState(Array(products.length).fill(false));
  const [quantity, setQuantity] = useState(Array(products.length).fill(1));
  const [purchased, setPurchased] = useState(Array(products.length).fill(false));

  const toggleLike = (i) => {
    const updated = [...likes];
    updated[i] = !updated[i];
    setLikes(updated);
  };

  const toggleExpand = (i) => {
    const updated = [...expand];
    updated[i] = !updated[i];
    setExpand(updated);
  };

  const incrementQty = (i) => {
    const updated = [...quantity];
    updated[i] += 1;
    setQuantity(updated);
  };

  const decrementQty = (i) => {
    if (quantity[i] > 1) {
      const updated = [...quantity];
      updated[i] -= 1;
      setQuantity(updated);
    }
  };

  const markPurchased = (i) => {
    const updated = [...purchased];
    updated[i] = !updated[i];
    setPurchased(updated);
  };

  // ----------------------------------------------------------
  // UI
  // ----------------------------------------------------------
  return (
    <div style={{ padding: "40px", backgroundColor: "#ffffffff", minHeight: "100vh" }}>

      <h1>Add ItemCard</h1>

      {/* ------------------------- */}
      {/*        FORM AREA         */}
      {/* ------------------------- */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "400px",
          marginBottom: "20px",
        }}
      >
        <h2>Add New Product</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            width: "100%",
            background: "#00fa1dff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>

        {success && <p style={{ color: "green" }}>Item added successfully!</p>}
      </form>

      {/* ------------------------- */}
      {/*   LIST OF ADDED ITEMS     */}
      {/* ------------------------- */}
      <h2>Submitted Items:</h2>

      {items.length === 0 && <p>No items yet.</p>}

      {items.map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "10px",
            width: "350px",
          }}
        >
          <h3>{item.title}</h3>
          <p>Category: {item.category}</p>
          <p>Price: ₹ {item.price}</p>

          <button
            onClick={() => deleteItem(index)}
            style={{
              background: "red",
              color: "white",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Delete Item
          </button>
        </div>
      ))}

      {items.length > 0 && (
        <button
          onClick={clearAll}
          style={{
            padding: "10px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Clear All
        </button>
      )}

      <hr style={{ margin: "40px 0" }} />

      {/* ------------------------- */}
      {/*  PRODUCT CARDS   */}
      {/* ------------------------- */}
      <h1>Original Products</h1>

      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        {products.map((item, i) => (
          <div key={i} style={{ width: "260px", background: purchased[i] ? "lightgreen" : "#9de7edff", padding: "15px", borderRadius: "10px" }}>
            <h2>{item.title}</h2>
            <p><b>₹ {item.price}</b></p>

            <button onClick={() => toggleExpand(i)}>
              {expand[i] ? "Hide Details" : "Show Details"}
            </button>

            {expand[i] && <p>{item.description}</p>}

            <button onClick={() => toggleLike(i)}>
              {likes[i] ?"♥ Liked" : "♡ Like"}
            </button>

            <div style={{ marginTop: "10px" }}>
              <button onClick={() => decrementQty(i)}>-</button>
              <span style={{ padding: "0 10px" }}>{quantity[i]}</span>
              <button onClick={() => incrementQty(i)}>+</button>
            </div>

            <button
              onClick={() => markPurchased(i)}
              style={{ marginTop: "10px", width: "100%" }}
            >
              {purchased[i] ? "Added ✓" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
