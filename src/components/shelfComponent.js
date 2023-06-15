import React from "react";
import GroceryItem from "./itemComponent";

function ShelfComponent({ items, onItemClick, itemFunction }) {
  const handleItemClick = (itemId) => {
    onItemClick(itemId);
  };

  return (
    <div className="d-flex flex-column align-items-center outer-div">
      {items.map((item) => (
        <GroceryItem
          key={item.id}
          itemImgSrc={item.imgSrc}
          itemName={item.name}
          itemPrice={item.price}
          itemQuantity={item.quantity}
          onItemClick={() => handleItemClick(item.id)}
          itemFunction={itemFunction}
        />
      ))}
    </div>
  );
}

export default ShelfComponent;
