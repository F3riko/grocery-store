import React, { useState } from "react";
import groceriesData from "./groceriesData.js";
import DepartmentComponent from "./components/departmentComponent.js";
import ReceiptComponent from "./components/receiptComponent.js";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [receiptData, setReceiptData] = useState({});
  const [storeState, setStoreState] = useState("store");

  const handleOrderClick = (storeState, cartItems, totalSum) => {
    setStoreState(storeState);
    setReceiptData({
      cartItems: cartItems,
      totalSum: totalSum,
    });
  };

  const handleBackButtonClick = (storeState) => {
    setStoreState(storeState);
  };

  const header = (
    <>
      <header className="text-center pt-2">
        <h1 style={{ "font-size": "36px" }}>Supermarket</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Order now</Link>
          </li>
          <li>
            <Link to="/order-history">Order history</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path=""
          element={
            <div className="bg-container">
              {header}
              <DepartmentComponent
                groceriesData={groceriesData}
                handleOrderClick={handleOrderClick}
              />
              {footer}
            </div>
          }
        />
        <Route path="" element={<OrderHistory />} />
      </Routes>
    </>
  );

  const footer = (
    <footer className="text-center pb-2">
      <h1 style={{ "font-size": "16px" }}>
        Shop here, spend your money, go back, spend again
      </h1>
    </footer>
  );

  if (storeState === "store") {
    return (
      <div className="bg-container">
        {header}
        <DepartmentComponent
          groceriesData={groceriesData}
          handleOrderClick={handleOrderClick}
        />
        {footer}
      </div>
    );
  } else {
    return (
      <>
        {header}
        <div className="bg-container">
          <ReceiptComponent
            cartItems={receiptData.cartItems}
            handleBackButton={handleBackButtonClick}
            totalSum={receiptData.totalSum}
          />
        </div>
        {footer}
      </>
    );
  }
}

export default App;
