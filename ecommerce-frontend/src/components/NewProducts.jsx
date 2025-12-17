

import { useEffect, useState } from "react";



function NewProducts() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // ✅ FETCH when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5009/users");
    const data = await res.json();
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Name cannot be empty");
      return;
    }

    const res = await fetch("http://localhost:5009/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });

    const data = await res.json();
    setMessage(data.message);

    setName("");
    fetchUsers(); // ✅ VERY IMPORTANT
  };

return (
  <div className="container-fluid mt-4 px-5">

    <h2 className="mb-3">Add User</h2>

    <form onSubmit={handleSubmit} className="mb-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="form-control form-control-lg mb-2"
      />

      <button className="btn btn-primary btn-lg">
        Add
      </button>
    </form>

    {message && <p className="text-success fs-5">{message}</p>}

    <h3 className="mt-4">Users List</h3>

    <ul className="list-group mt-2">
      {users.map((u) => (
        <li key={u.id} className="list-group-item fs-5">
          {u.name}
        </li>
      ))}
    </ul>
  </div>
);


return (
  <div className="container-fluid mt-10 px-10">

    <h2 className="mb-3">Add User</h2>

    <form onSubmit={handleSubmit} className="mb-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="form-control form-control-lg mb-2"
      />

      <button className="btn btn-primary btn-lg">
        Add
      </button>
    </form>

    {message && <p className="text-success fs-5">{message}</p>}

    <h3 className="mt-4">Users List</h3>

    <ul className="list-group mt-2">
      {users.map((u) => (
        <li key={u.id} className="list-group-item fs-5">
          {u.name}
        </li>
      ))}
    </ul>
  </div>
);
} 

export default NewProducts;