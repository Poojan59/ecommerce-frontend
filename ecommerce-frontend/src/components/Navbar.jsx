export default function Navbar({ setPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand">SneakersElite</span>

      <div className="navbar-nav">
        <button className="btn btn-outline-light mx-2" onClick={() => setPage("home")}>Home</button>
        <button className="btn btn-outline-light mx-2" onClick={() => setPage("about")}>About</button>
        <button className="btn btn-outline-light mx-2" onClick={() => setPage("project")}>Project</button>
      </div>
    </nav>
  );
}
