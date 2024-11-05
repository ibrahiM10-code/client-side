import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function RequestPswChangePage() {
  return (
    <>
      <NavBar loggedIn={false} />
      <h3>Aqui el usuario ingresa 2 veces la clave nueva</h3>
      <Footer />
    </>
  );
}

export default RequestPswChangePage;
