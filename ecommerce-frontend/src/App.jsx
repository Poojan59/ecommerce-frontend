import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import NewProducts from "./components/NewProducts";
import AddUser from "./components/AddUser";



import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "project" && <Project />}
      {page === "newproducts" && <NewProducts />}
      {page === "users" && <Users />}


      <Footer />
    </>
  );
}

export default App;