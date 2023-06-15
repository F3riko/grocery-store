import React, { useState } from "react";
import groceriesData from "./groceriesData.js";
import ShelfComponent from "./components/shelfComponent";
import CartComponent from "./components/cartComponent";
import ReceiptComponent from "./components/receiptComponent.js";
import "./App.css";

function App() {
  // States for shelf and cart
  const [shelfItems, setShelfItems] = useState(groceriesData);
  const [cartItems, setCartItems] = useState({});
  const [totalSum, setTotalSum] = useState(0);
  const [storeState, setStoreState] = useState("store");

  const handleShelfItemClick = (itemId) => {
    if (cartItems.hasOwnProperty(itemId)) {
      const updatedCartItems = {
        ...cartItems,
        [itemId]: {
          ...cartItems[itemId],
          quantity: cartItems[itemId].quantity + 1,
        },
      };
      setCartItems(updatedCartItems);
    } else {
      const addedCartItem = {
        ...shelfItems[itemId],
        quantity: 1,
      };
      setCartItems({
        ...cartItems,
        [itemId]: addedCartItem,
      });
    }

    const updatedShelfItems = {
      ...shelfItems,
      [itemId]: {
        ...shelfItems[itemId],
        quantity: shelfItems[itemId].quantity - 1,
      },
    };
    setShelfItems(updatedShelfItems);

    let updatedSum = totalSum + groceriesData[itemId].price;
    setTotalSum(updatedSum);
  };

  const handleCartItemClick = (itemId) => {
    const updatedShelfItems = {
      ...shelfItems,
      [itemId]: {
        ...shelfItems[itemId],
        quantity: shelfItems[itemId].quantity + 1,
      },
    };
    setShelfItems(updatedShelfItems);

    const updatedCartItems = {
      ...cartItems,
      [itemId]: {
        ...cartItems[itemId],
        quantity: cartItems[itemId].quantity - 1,
      },
    };
    if (updatedCartItems[itemId].quantity <= 0) {
      delete updatedCartItems[itemId];
    }
    setCartItems(updatedCartItems);

    const updatedSum = totalSum - groceriesData[itemId].price;
    setTotalSum(updatedSum);
  };

  const handleOrderClick = () => {
    setShelfItems(groceriesData);
    setStoreState("receipt");
  };

  const handleBackButtonClick = () => {
    setStoreState("store");
    setTotalSum(0);
    setCartItems({});
  };

  if (storeState === "store") {
    return (
      <div class="center">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 class="text-center">My Grocery Shelf</h1>
              <div class="container">
                <ShelfComponent
                  items={Object.values(shelfItems)}
                  onItemClick={handleShelfItemClick}
                />
              </div>
            </div>
            <div class="col-md-6">
              <h1 class="text-center">My Grocery Cart</h1>
              <div class="container">
                <CartComponent
                  items={Object.values(cartItems)}
                  onItemClick={handleCartItemClick}
                />
                {totalSum > 0 ? (
                  <div className="container container-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="alert alert-info d-inline-block">
                        Total: {totalSum}₪
                      </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          handleOrderClick();
                        }}
                      >
                        Order
                      </button>
                    </div>
                  </div>
                ) : undefined}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <ReceiptComponent
        cartItems={cartItems}
        handleBackButton={handleBackButtonClick}
      />
    );
  }
}

export default App;
