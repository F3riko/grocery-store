import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import groceriesData from "./groceriesData.js";
import DepartmentComponent from "./components/departmentComponent.js";
import ReceiptComponent from "./components/receiptComponent.js";
import HeaderComponent from "./components/headerComponent.js";
import FooterComponent from "./components/footerComponent.js";
import OrderHistoryComponent from "./components/orderHistoryComponent.js";
import { addToOrderHistory } from "./localStorageOp.js";
import { getOrderHistory } from "./localStorageOp.js";

function App() {
  const [receiptData, setReceiptData] = useState({});
  const [orderHistory, setOrderHistory] = useState(getOrderHistory());

  const handleOrderClick = (storeState, cartItems, totalSum, navigate) => {
    // setStoreState(storeState);
    setReceiptData({
      cartItems: cartItems,
      totalSum: totalSum,
    });
    const orderId = Date.now().toString();
    const newOrder = {
      id: orderId, 
      items: Object.values(cartItems),
      totalSum: totalSum,
    };
    setOrderHistory((prevOrderHistory) => [...prevOrderHistory, newOrder]);
    addToOrderHistory(newOrder);
    navigate(`/receipt/${orderId}`);
  };

  const handleBackButtonClick = () => {
    
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
            element={<OrderHistoryComponent orderHistory={orderHistory} />}
          />
          <Route
            path="/receipt/:orderId"
            element={
              <ReceiptComponent
                orderHistory={orderHistory}
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
