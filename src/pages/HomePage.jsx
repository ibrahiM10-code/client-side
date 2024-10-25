import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <>
            <NavBar loggedIn={true} />
            <div className="menu-container">
                <div className="first-row-options">    
                    <div className="latest-expense-container option">
                        <div className="latest-expense-content">
                            <p>Latest expense made:</p>
                            <h1>$30.000</h1>
                            <div className="latest-expense">
                                <img src="./images/red-arrow.png" alt="red arrow" />
                                <p>Shoes</p>
                            </div>
                        </div>
                    </div>
                    <div className="payment-methods-container option">
                        <div className="payment-method-content">
                            <div className="option-legend">
                                <p>My Payment</p>
                                <p>Methods</p>
                            </div>
                            <div className="payment-methods-img-container">
                                <img src="./images/cards.png" alt="cards icon" />
                                <img src="./images/money.png" alt="money icon" id="money-img-methods"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-row-options">    
                    <div className="add-expense-container option">
                        <div className="add-expense-content">
                            <div className="option-legend">
                                <p>Add</p>
                                <p>Expense</p>
                            </div>
                            <div className="add-expense-img-container">
                                <img src="./images/money-bag.png" alt="money bag icon" />
                                <img src="./images/red-arrow.png" alt="red arrow" id="red-arrow-add"/>
                            </div>
                        </div>
                    </div>
                    <div className="history-container option">
                        <div className="history-content">
                            <div className="option-legend">
                                <p>Expenses</p>
                                <p>History</p>
                            </div>
                            <img src="./images/bar.png" alt="bars graph icon" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;