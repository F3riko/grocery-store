import GroceryItem from "./itemComponent";

function ShelfComponent(props) {
  return (
    <div>
      {props.items.map((item) => (
        <GroceryItem
          key={item.id}
          itemImgSrc={item.imgSrc}
          itemName={item.name}
          itemPrice={item.price}
          itemQtyGiven={item.qtyGiven}
          itemOnClick={item.onClick}
        />
      ))}
    </div>
  );
}

export default ShelfComponent;
