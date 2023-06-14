import "./App.css";
import "./components/itemComponent";
import GroceryItem from "./components/itemComponent";

function App() {
  function itemOnClick1(quantity) {
    console.log(quantity);
    return quantity - 1
  }

  return (
    <GroceryItem
      itemImgSrc=".test"
      itemName="Test"
      itemPrice="2"
      itemQtyGiven="2"
      itemOnClick={itemOnClick1}
    />
  );
}

export default App;
