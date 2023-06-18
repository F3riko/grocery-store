import React from "react";
import { getOrderHistory, clearOrderHistory } from "../localStorageOp";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import ReceiptComponent from "./receiptComponent";
import { clearOrderHistoryData } from "../localStorageOp";

function OrderHistory() {
  const navigate = useNavigate();
  const orderHistory = getOrderHistory();

  function handleOrderClick(orderId) {
    navigate(`/receipt/${orderId}`);
  }

  function handleClearHistory() {
    clearOrderHistoryData();
  }

  return (
    <div>
      <div className="row mb-4">
        <div className="col">
          <button className="btn btn-danger" onClick={handleClearHistory}>
            Clear History
          </button>
        </div>
      </div>
      <div className="row">
        {orderHistory.map((order, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order #{index + 1}</h5>
                <p className="card-text">{order.totalSum}₪</p>
                <Link to={`/receipt/${order.id}`} className="btn btn-primary">
                  View Receipt
                </Link>
                <Routes>
                  <Route
                    path={`/receipt/:orderId`}
                    element={<ReceiptComponent orderId={order.id} />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
