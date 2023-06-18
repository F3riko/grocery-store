import React, { useState } from "react";
import groceriesData from "./groceriesData.js";
import DepartmentComponent from "./components/departmentComponent.js";
import ReceiptComponent from "./components/receiptComponent.js";
import "./App.css";
import HeaderComponent from "./components/headerComponent.js";
import FooterComponent from "./components/footerComponent.js";

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

  if (storeState === "store") {
    return (
      <div className="bg-container">
        <HeaderComponent />
        <DepartmentComponent
          groceriesData={groceriesData}
          handleOrderClick={handleOrderClick}
        />
        <FooterComponent />
      </div>
    );
  } else {
    return (
      <>
        <HeaderComponent />
        <div className="bg-container">
          <ReceiptComponent
            cartItems={receiptData.cartItems}
            handleBackButton={handleBackButtonClick}
            totalSum={receiptData.totalSum}
          />
        </div>
        <FooterComponent />
      </>
    );
  }
}

export default App;
