import { useEffect, useState } from "react";

export default function NewProducts() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5009/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setError("Failed to fetch"));
  }, []);

  return (
    <div 
     style={{
        padding: "400px",
        minHeight: "20vh",
        backgroundColor: "#10625264",
        textAlign: "left"
      }} className="container mt-4">
      <h2>Backend Data</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
