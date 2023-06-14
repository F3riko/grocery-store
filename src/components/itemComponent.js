import { useState } from "react";

function GroceryItem({
  itemImgSrc,
  itemName,
  itemPrice,
  itemQtyGiven,
  itemOnClick,
}) {
  let [itemQty, updateItemQty] = useState(Number(itemQtyGiven));

  return (
    <div
      onClick={() => {
        updateItemQty(itemOnClick(itemQty));
      }}
    >
      <img src={itemImgSrc} alt={itemName} />
      <div>Quantity is {itemQty}</div>
      <div>Name is {itemName}</div>
      <div>Price is {itemPrice}$</div>
    </div>
  );
}

export default GroceryItem;
