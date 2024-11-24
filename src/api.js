import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000';

export const getProducts = () => axios.get(`${API_BASE}/products`);
export const getOrders = () => axios.get(`${API_BASE}/orders`);
export const createOrder = (order) => axios.post(`${API_BASE}/orders`, order);
export const deleteOrder = (orderId) => axios.delete(`${API_BASE}/orders/${orderId}`);
export const updateOrder = (orderId, order) => axios.put(`${API_BASE}/orders`, { oid: orderId, orders: order });
