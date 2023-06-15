import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function GroceryItem({
  itemId,
  itemImgSrc,
  itemName,
  itemPrice,
  itemQuantity,
  onItemClick,
  itemFunction,
}) {
  const handleItemClick = () => {
    if (itemQuantity > 0) {
      onItemClick(itemId);
    }
  };

  return (
    <div
      className="grocery-item row align-items-center w-75"
      onClick={handleItemClick}
    >
      <div className="col-auto">
        <img
          className={
            itemFunction === "cart"
              ? "btn btn-outline-danger"
              : itemFunction === "receipt"
              ? undefined
              : "btn btn-outline-success"
          }
          src={itemImgSrc}
          alt={itemName}
        />
      </div>
      <div className="col ">
        <div className="d-flex flex-column">
          <div>{itemName}</div>
          <div>Qty: {itemQuantity}</div>
          <div>Price: {itemPrice}₪</div>
          {itemFunction == "receipt" ? (
            <div>Subtotal: {(itemPrice * itemQuantity).toFixed(0)}₪</div>
          ) : undefined}
        </div>
      </div>
    </div>
  );
}

export default GroceryItem;
