import React, { useState } from "react";
import ShelfComponent from "./shelfComponent";
import { useNavigate } from "react-router-dom";

function DepartmentComponent({ groceriesData, handleOrderClick }) {
  // States for shelf and cart
  const [shelfItems, setShelfItems] = useState(groceriesData);
  const [cartItems, setCartItems] = useState({});
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigate();

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
    handleOrderClick("receipt", cartItems, totalSum, navigate);
  };

  return (
    <div className="center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="bg-white border border-danger rounded mt-5">
              <h1 className="text-center mt-4">Eat, drink, enjoy</h1>
              <div className="container">
                <ShelfComponent
                  items={Object.values(shelfItems)}
                  onItemClick={handleShelfItemClick}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="bg-white border border-danger rounded mt-5">
              <h1 className="text-center mt-4">Cart</h1>
              <div className="container">
                <ShelfComponent
                  items={Object.values(cartItems)}
                  onItemClick={handleCartItemClick}
                  itemFunction={"cart"}
                />
                {totalSum > 0 && (
                  <div className="container pb-2">
                    <div className="alert alert-info text-center">
                      Total: {totalSum}₪
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          handleOrderClicked();
                        }}
                      >
                        Order
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentComponent;
