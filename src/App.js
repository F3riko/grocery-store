import React, { useState } from "react";
import ShelfComponent from "./components/shelfComponent";
import CartComponent from "./components/cartComponent";
import GroceryItem from "./components/itemComponent";
import "./App.css";

function App() {
  const groceriesData = {
    1: {
      id: 1,
      imgSrc: "/thumbnails/chips.png",
      name: "Chips",
      price: 3,
      quantity: 3,
    },
    2: {
      id: 2,
      imgSrc: "/thumbnails/chewing-gum.png",
      name: "Chewing gum",
      price: 2,
      quantity: 5,
    },
    3: {
      id: 3,
      imgSrc: "/thumbnails/chocolate-bar.png",
      name: "Chocolate",
      price: 5,
      quantity: 7,
    },
    4: {
      id: 4,
      imgSrc: "/thumbnails/cola.png",
      name: "Cola",
      price: 6,
      quantity: 12,
    },
    5: {
      id: 5,
      imgSrc: "/thumbnails/cookies.png",
      name: "Cookies",
      price: 7,
      quantity: 2,
    },
    6: {
      id: 6,
      imgSrc: "/thumbnails/ice-cream.png",
      name: "Ice cream",
      price: 12,
      quantity: 9,
    },
    7: {
      id: 7,
      imgSrc: "/thumbnails/milk.png",
      name: "Milk",
      price: 5,
      quantity: 3,
    },
  };

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

    let updatedSum = totalSum;
    updatedSum += groceriesData[itemId].price;
    setTotalSum(updatedSum);
  };

  const handleCartItemClick = (itemId) => {
    if (shelfItems.hasOwnProperty(itemId)) {
      const updatedShelfItems = {
        ...shelfItems,
        [itemId]: {
          ...shelfItems[itemId],
          quantity: shelfItems[itemId].quantity + 1,
        },
      };
      setShelfItems(updatedShelfItems);
    } else {
      const addedShelfItem = {
        ...cartItems[itemId],
        quantity: 1,
      };
      setShelfItems({
        ...shelfItems,
        [itemId]: addedShelfItem,
      });
    }

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

    let updatedSum = totalSum;
    updatedSum -= groceriesData[itemId].price;
    setTotalSum(updatedSum);
  };

  const handleOrderClick = () => {
    setShelfItems(groceriesData);
    setStoreState("receipt");
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
      <>
        {Object.values(cartItems).map((item) => (
          <GroceryItem
            key={item.id}
            itemImgSrc={item.imgSrc}
            itemName={item.name}
            itemPrice={item.price}
            itemQuantity={item.quantity}
            onItemClick={() => {}}
          />
        ))}
        <button
          onClick={() => {
            setStoreState("store");
            setTotalSum(0);
            setCartItems({})
          }}
        >
          Back
        </button>
      </>
    );
  }
}

export default App;
