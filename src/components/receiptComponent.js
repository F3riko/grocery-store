import React from "react";
import { useNavigate } from "react-router-dom";
import GroceryItem from "./itemComponent";
import "../App.css";
import { addToOrderHistory } from "../localStorageOp";

function ReceiptComponent({ cartItems, handleBackButton, totalSum }) {


  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    handleBackButton("store");
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="bg-white border border-danger rounded mt-5">
              <h1 className="text-center mt-5">Your receipt</h1>
              <div className="d-flex flex-column align-items-center outer-div">
                {Object.values(cartItems).map((item) => (
                  <GroceryItem
                    key={item.id}
                    itemImgSrc={item.imgSrc}
                    itemName={item.name}
                    itemPrice={item.price}
                    itemQuantity={item.quantity}
                    onItemClick={() => {}}
                    itemFunction="receipt"
                  />
                ))}
              </div>
              <div className="text-center mt-3">Total: {String(totalSum)}₪</div>
              <div className="text-center mt-3">
                <button
                  className="btn btn-outline-primary mb-3"
                  onClick={handleBackButtonClick}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiptComponent;
