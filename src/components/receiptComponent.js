import React from "react";
import GroceryItem from "./itemComponent";

function ReceiptComponent({ cartItems, handleBackButton }) {
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
          handleBackButton("store")
        }}
      >
        Back
      </button>
    </>
  );
}

export default ReceiptComponent;