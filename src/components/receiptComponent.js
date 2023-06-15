import React from "react";
import GroceryItem from "./itemComponent";

function ReceiptComponent({ cartItems, handleBackButton, totalSum }) {
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
          itemFunction={"receipt"}
        />
      ))}
      <div>Total: {totalSum}₪</div>
      <button
        onClick={() => {
          handleBackButton("store");
        }}
      >
        Back
      </button>
    </>
  );
}

export default ReceiptComponent;
