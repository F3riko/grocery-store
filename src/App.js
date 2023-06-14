import "./App.css";
import "./components/itemComponent";
import ShelfComponent from "./components/shelfComponent";

function App() {
  const props = {
    items: [
      {
        id: 1,
        imgSrc: "path/to/image1.jpg",
        name: "Item 1",
        price: 10.99,
        qtyGiven: 3,
        onClick: itemOnClick1
      },
      {
        id: 2,
        imgSrc: "path/to/image2.jpg",
        name: "Item 2",
        price: 7.99,
        qtyGiven: 5,
        onClick: itemOnClick1
      },
      // Additional items...
    ]
  };
  
  function itemOnClick1(quantity) {
    console.log(quantity); // Cleart it
    if (quantity > 0) {
      return quantity - 1
    } else {
      return 0
    }
  }

  return (
    <ShelfComponent {...props}/>
  );
}

export default App;
