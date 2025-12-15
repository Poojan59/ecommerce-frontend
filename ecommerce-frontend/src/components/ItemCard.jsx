export default function ItemCard({ title, category, price, onDelete }) {
  return (
    <div
   className="card shadow p-3 h-100"


      style={{
        padding: "15px",
        borderRadius: "10px",
        backgroundColor: "#a35454ff",
        marginBottom: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>Price: ₹{price}</p>
      <button
        onClick={onDelete}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete ❌
      </button>
    </div>
  );
}
