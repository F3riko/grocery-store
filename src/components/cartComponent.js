import React from "react";
import CartItem from "./itemComponent";

function CartComponent({ items, onItemClick }) {
  const handleItemClick = (itemId) => {
    onItemClick(itemId);
  };

  return (
    <div className="cart">
      {items.map((item) => (
        <CartItem
          key={item.id}
          itemImgSrc={item.imgSrc}
          itemName={item.name}
          itemPrice={item.price}
          itemQuantity={item.quantity}
          onItemClick={() => handleItemClick(item.id)}
        />
      ))}
    </div>
  );
}

export default CartComponent;
