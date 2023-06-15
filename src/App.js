import React, { useState } from "react";
import groceriesData from "./groceriesData.js";
import DepartmentComponent from "./components/departmentComponent.js";
import ReceiptComponent from "./components/receiptComponent.js";
import "./App.css";

function App() {
  // States for shelf and cart
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

  if (storeState === "store") {
    return (
      <div className="bg-container">
        <DepartmentComponent
          groceriesData={groceriesData}
          handleOrderClick={handleOrderClick}
        />
      </div>
    );
  } else {
    return (
      <div className="bg-container">
        <ReceiptComponent
          cartItems={receiptData.cartItems}
          handleBackButton={handleBackButtonClick}
          totalSum={receiptData.totalSum}
        />
      </div>
    );
  }
}

export default App;
