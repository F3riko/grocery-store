import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function GroceryItem({
  itemId,
  itemImgSrc,
  itemName,
  itemPrice,
  itemQuantity,
  onItemClick,
}) {
  const handleItemClick = () => {
    if (itemQuantity > 0) {
      onItemClick(itemId);
    }
  };

  return (
    <div
      className="grocery-item row align-items-center"
      onClick={handleItemClick}
    >
      <div className="col-auto">
        <img src={itemImgSrc} alt={itemName} />
      </div>
      <div className="col">
        <div className="d-flex flex-column">
          <div>Quantity: {itemQuantity}</div>
          <div>Name: {itemName}</div>
          <div>Price: {itemPrice}₪</div>
        </div>
      </div>
    </div>
  );
}

export default GroceryItem;
