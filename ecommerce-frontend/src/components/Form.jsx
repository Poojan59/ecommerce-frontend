import { useState } from "react";

export default function Form({ addItem }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !category || !price) {
      alert("All fields are required!");
      return;
    }

    const newItem = {
      title,
      category,
      price,
    };

    addItem(newItem);

    setTitle("");
    setCategory("");
    setPrice("");

    setSuccess(true);
    setTimeout(() => setSuccess(false), 1500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "20px",
        background: "#ffffff",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Add New Product</h2>

      <input
        type="text"
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <button
        type="submit"
        style={{
          padding: "8px 15px",
          background: "black",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      {success && <p style={{ color: "green" }}>Product added successfully!</p>}
    </form>
  );
}
