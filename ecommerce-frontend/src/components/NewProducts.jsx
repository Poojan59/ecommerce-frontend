import { useEffect, useState } from "react";

function NewProducts() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(null);

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

    if (editId) {
      await fetch(`http://localhost:5009/users/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
      });
      setMessage("User updated successfully");
      setEditId(null);
    } else {
      await fetch("http://localhost:5009/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
      });
      setMessage("User added successfully");
    }

    setName("");
    fetchUsers();
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5009/users/${id}`, {
      method: "DELETE"
    });
    setMessage("User deleted successfully");
    fetchUsers();
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">

          {/* CARD */}
          <div className="card shadow-lg">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                {editId ? "Update User" : "Add User"}
              </h2>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
                <input
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter user name"
                />
                <button className="btn btn-primary px-4">
                  {editId ? "Update" : "Add"}
                </button>
              </form>

              {message && (
                <div className="alert alert-info text-center">
                  {message}
                </div>
              )}

              {/* TABLE */}
              <h4 className="mt-4">Users List</h4>

              <div className="table-responsive">
                <table className="table table-bordered table-striped mt-2 text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u, index) => (
                      <tr key={u.id}>
                        <td>{index + 1}</td>
                        <td>{u.name}</td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => handleEdit(u)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(u.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default NewProducts;
