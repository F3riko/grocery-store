import React from "react";
import GroceryItem from "./itemComponent";

function ShelfComponent({ items, onItemClick }) {
  const handleItemClick = (itemId) => {
    onItemClick(itemId);
  };

  return (
    <div className="shelf">
      {items.map((item) => (
        <GroceryItem
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

export default ShelfComponent;