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

        <main class="container mt-5">
          <section id="mission">
            <h2 class="text-center">Nuestra Misión</h2>
            <p>
              Empoderarte con el conocimiento y las herramientas necesarias para
              tomar decisiones financieras informadas. Nuestro objetivo es
              ayudarte a construir un futuro más seguro y próspero.
            </p>
          </section>

          <section id="services">
            <h2 class="text-center mb-4">¿Qué ofrecemos?</h2>
            <div class="row text-center">
              <div class="col-md-3 mb-4">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <i class="fas fa-chart-line fa-3x mb-3 text-primary"></i>
                    <h5 class="card-title">Generación de Gráficos</h5>
                    <p class="card-text">
                      Visualiza tus datos financieros de manera efectiva.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-4">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <i class="fas fa-plus fa-3x mb-3 text-primary"></i>
                    <h5 class="card-title">Agregar Gastos</h5>
                    <p class="card-text">
                      Controla tus gastos y mejora tu presupuesto.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-4">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <i class="fas fa-credit-card fa-3x mb-3 text-primary"></i>
                    <h5 class="card-title">Métodos de Pago</h5>
                    <p class="card-text">
                      Configura tus métodos de pago preferidos.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-4">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <i class="fas fa-calendar-alt fa-3x mb-3 text-primary"></i>
                    <h5 class="card-title">Visualización de Saldos</h5>
                    <p class="card-text">Revisa tus saldos por semana o mes.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer-landing">
          <p>
            ¡Gracias por visitarnos! Juntos, haremos que tus sueños financieros
            se conviertan en una realidad.
          </p>
          <p class="gold">Colaboración Chile - Brasil</p>
        </footer>
      </>
    );
}

export default LandingPage;