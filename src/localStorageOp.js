export function addToOrderHistory(order) {
  const existingOrderHistory = getOrderHistory();
  const updatedOrderHistory = [...existingOrderHistory, order];
  localStorage.setItem("orderHistory", JSON.stringify(updatedOrderHistory));
}

export function getOrderHistory() {
  const orderHistory = localStorage.getItem("orderHistory");
  return orderHistory ? JSON.parse(orderHistory) : [];
}

export function clearOrderHistoryData() {
  localStorage.removeItem("orderHistory");
  window.location.reload(); // Refresh the page
}


