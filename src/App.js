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
      totalSum: totalSum
    });
  };

  const handleBackButtonClick = (storeState) => {
    setStoreState(storeState)
  };

  if (storeState === "store") {
    return (
      <DepartmentComponent
        groceriesData={groceriesData}
        handleOrderClick={handleOrderClick}
      />
    );
  } else {
    return (
      <ReceiptComponent
        cartItems={receiptData.cartItems}
        handleBackButton={handleBackButtonClick}
      />
    );
  }
}

export default App;
