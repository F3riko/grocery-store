import React from "react";
import { getOrderHistory } from "../localStorageOp";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import ReceiptComponent from "./receiptComponent";

function OrderHistory() {
  const navigate = useNavigate();
  const orderHistory = getOrderHistory();

  function handleOrderClick(orderId) {
    navigate(`/receipt/${orderId}`);
  }

  return (
    <>
      {orderHistory.map((order, index) => (
        <div key={index} onClick={() => handleOrderClick(order.id)}>
          <Link to={`/receipt/${order.id}`}>
            <h3>Order #{index + 1}</h3>
            <div>{order.totalSum}₪</div>
          </Link>
          <Routes>
            <Route
              path={`/receipt/:orderId`}
              element={<ReceiptComponent orderId={order.id} />}
            />
          </Routes>
        </div>
      ))}
    </>
  );
}

export default OrderHistory;
