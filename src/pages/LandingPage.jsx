import React from "react";
import NavBar from "../components/NavBar";

function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="header-landing">
        <h1>¡Bienvenido a BC Finances!</h1>
        <p>Tu ayudante hacia una vida financiera saludable</p>
      </div>

      <main className="container mt-5">
        <section id="mission">
          <h2 className="text-center">Nuestra Misión</h2>
          <p>
            Empoderarte con el conocimiento y las herramientas necesarias para
            tomar decisiones financieras informadas. Nuestro objetivo es
            ayudarte a construir un futuro más seguro y próspero.
          </p>
        </section>

        <section id="services">
          <h2 className="text-center mb-4">¿Qué ofrecemos?</h2>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <i className="fas fa-chart-line fa-3x mb-3 text-primary"></i>
                  <h5 className="card-title">Generación de Gráficos</h5>
                  <p className="card-text">
                    Visualiza tus datos financieros de manera efectiva.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <i className="fas fa-plus fa-3x mb-3 text-primary"></i>
                  <h5 className="card-title">Agregar Gastos</h5>
                  <p className="card-text">
                    Controla tus gastos y mejora tu presupuesto.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <i className="fas fa-credit-card fa-3x mb-3 text-primary"></i>
                  <h5 className="card-title">Métodos de Pago</h5>
                  <p className="card-text">
                    Configura tus métodos de pago preferidos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <i className="fas fa-calendar-alt fa-3x mb-3 text-primary"></i>
                  <h5 className="card-title">Visualización de Saldos</h5>
                  <p className="card-text">
                    Revisa tus saldos por semana o mes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-landing">
        <p>
          ¡Gracias por visitarnos! Juntos, haremos que tus sueños financieros se
          conviertan en una realidad.
        </p>
        <p className="gold">Colaboración Chile - Brasil</p>
      </footer>
    </>
  );
}

export default LandingPage;
