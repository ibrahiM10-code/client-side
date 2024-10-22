import React from "react";
import NavBar from "../components/NavBar";

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
                        {/* <div className="payment-method-content">
                            <h1>My Payment Methods</h1>
                            <img src="./images/money.png" alt="money icon" />
                            <img src="./images/cards.png" alt="cards icon" />
                        </div> */}
                    </div>
                </div>
                <div className="second-row-options">    
                    <div className="add-expense-container option">
                        {/* <div className="add-expense-content">
                            <h1>Add Expense</h1>
                            <img src="./images/red-arrow.png" alt="red arrow" />
                            <img src="./iamges/money-bag.png" alt="money bag icon" />
                        </div> */}
                    </div>
                    <div className="history-container option">
                        {/* <div className="history-content">
                            <h1>Expenses History</h1>
                            <img src="./images/bar.png" alt="bars graph icon" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;