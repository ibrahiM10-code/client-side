import React from "react";
import NavBar from "../components/NavBar";

function LandingPage() {
    return (
      <>
        <NavBar />
        <div className="header-landing">
          <h1>Welcome to BC Finances!</h1>
          <p>Your assistant towards a healthy financial life</p>
        </div>

        <main className="container mt-5">
          <section id="mission">
            <h2 className="text-center">Our Mission</h2>
            <p>
              Empowering you with the knowledge and tools necessary to make informed financial decisions. Our goal is to help you build a more secure and prosperous future.
            </p>
          </section>

          <section id="services">
            <h2 className="text-center mb-4">What do we offer?</h2>
            <div className="row text-center">
              <div className="col-md-3 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <i className="fas fa-chart-line fa-3x mb-3 text-primary"></i>
                    <h5 className="card-title">Graph Generation</h5>
                    <p className="card-text">
                      Visualize your financial data effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <i className="fas fa-plus fa-3x mb-3 text-primary"></i>
                    <h5 className="card-title">Add Expenses</h5>
                    <p className="card-text">
                      Control your expenses and improve your budget.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <i className="fas fa-credit-card fa-3x mb-3 text-primary"></i>
                    <h5 className="card-title">Payment Methods</h5>
                    <p className="card-text">
                      Set up your preferred payment methods.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <i className="fas fa-calendar-alt fa-3x mb-3 text-primary"></i>
                    <h5 className="card-title">Balance View</h5>
                    <p className="card-text">Check your balances by week or month.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer-landing">
          <p>
            Thank you for visiting us! Together, we will make your financial dreams come true.
          </p>
          <p className="gold">Collaboration Chile - Brazil</p>
        </footer>
      </>
    );
}

export default LandingPage;
