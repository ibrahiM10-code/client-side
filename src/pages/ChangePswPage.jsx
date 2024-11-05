import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function ChangePswPage() {
  return (
    <>
      <NavBar loggedIn={false} />
      <h3>
        Aqui el usuario debe poner el correo con el que se registro para
        mandarle el codigo
      </h3>
      <Footer />
    </>
  );
}

export default ChangePswPage;
