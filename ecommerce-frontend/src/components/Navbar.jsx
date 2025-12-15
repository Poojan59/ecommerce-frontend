export default function Navbar({ setPage }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">SneakersElite</span>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-light" onClick={() => setPage("home")}>Home</button>
          <button className="btn btn-outline-light" onClick={() => setPage("about")}>About</button>
          <button className="btn btn-outline-light" onClick={() => setPage("project")}>Project</button>
          <button className="btn btn-outline-warning" onClick={() => setPage("newproducts")}>
            NewProducts
          </button>
        </div>
      </div>
    </nav>
  );
}
