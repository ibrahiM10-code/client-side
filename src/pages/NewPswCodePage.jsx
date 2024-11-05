import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function NewPswCodePage() {
  return (
    <>
      <NavBar loggedIn={false} />
      <h3>Aqui el usuario ingresa el codigo de 6 digitos</h3>
      <Footer />
    </>
  );
}

export default NewPswCodePage;
