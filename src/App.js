import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import groceriesData from "./groceriesData.js";
import DepartmentComponent from "./components/departmentComponent.js";
import ReceiptComponent from "./components/receiptComponent.js";
import HeaderComponent from "./components/headerComponent.js";
import FooterComponent from "./components/footerComponent.js";
import OrderHistoryComponent from "./components/orderHistoryComponent.js"

function App() {
  const [receiptData, setReceiptData] = useState({});
  const [storeState, setStoreState] = useState("store");

  const handleOrderClick = (storeState, cartItems, totalSum, navigate) => {
    setStoreState(storeState);
    setReceiptData({
      cartItems: cartItems,
      totalSum: totalSum,
    });
    navigate("/receipt");
  };

  const handleBackButtonClick = () => {
    setStoreState("store");
  };

  return (
    <Router>
      <div className="bg-container">
        <HeaderComponent />
        <Routes>
          <Route
            path="/"
            element={
              <DepartmentComponent
                groceriesData={groceriesData}
                handleOrderClick={handleOrderClick}
              />
            }
          />
          <Route
            path="/order-history"
            element={<OrderHistoryComponent />}
          />
          <Route
            path="/receipt"
            element={
              <ReceiptComponent
                cartItems={receiptData.cartItems}
                handleBackButton={handleBackButtonClick}
                totalSum={receiptData.totalSum}
              />
            }
          />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
