import React, { useState } from "react";
import ShelfComponent from "./shelfComponent";

function DepartmentComponent({ groceriesData, handleOrderClick }) {
  // States for shelf and cart
  const [shelfItems, setShelfItems] = useState(groceriesData);
  const [cartItems, setCartItems] = useState({});
  const [totalSum, setTotalSum] = useState(0);

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

  const handleOrderClicked = () => {
      handleOrderClick("receipt", cartItems, totalSum)
  };

  return (
    <div className="center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-center mt-5">Eat, drink, enjoy</h1>
            <div className="container">
              <ShelfComponent
                items={Object.values(shelfItems)}
                onItemClick={handleShelfItemClick}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="text-center mt-5">Cart</h1>
            <div className="container">
              <ShelfComponent
                items={Object.values(cartItems)}
                onItemClick={handleCartItemClick}
              />
              {totalSum > 0 ? (
                <div classNameName="container container-center">
                  <div classNameName="d-flex justify-content-center align-items-center">
                    <div classNameName="alert alert-info d-inline-block">
                      Total: {totalSum}₪
                    </div>
                  </div>
                  <div classNameName="d-flex justify-content-center align-items-center">
                    <button
                      classNameName="btn btn-outline-success"
                      onClick={() => {
                        handleOrderClicked();
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
}

export default DepartmentComponent;
