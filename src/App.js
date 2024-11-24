import React, { useState } from 'react';
import OrderForm from './OrderForm';
import OrderList from './OrderList';

const App = () => {
    const [products] = useState([
        { id: 'p1', name: 'Sản phẩm A', price: 100, image: 'https://via.placeholder.com/150' },
        { id: 'p2', name: 'Sản phẩm B', price: 200, image: 'https://via.placeholder.com/150' },
        { id: 'p3', name: 'Sản phẩm C', price: 300, image: 'https://via.placeholder.com/150' },
    ]);

    const [orders, setOrders] = useState([]);

    const handleSubmitOrder = (productId, quantity) => {
        setOrders((prev) => {
            const existingIndex = prev.findIndex((item) => item.productId === productId);

            if (existingIndex >= 0) {
                // Nếu sản phẩm đã tồn tại, cập nhật số lượng
                const updatedOrders = [...prev];
                updatedOrders[existingIndex].quantity += quantity;
                return updatedOrders;
            } else {
                // Nếu sản phẩm chưa tồn tại, thêm mới
                return [...prev, { productId, quantity }];
            }
        });
    };

    const handleDeleteOrder = (productId) => {
        setOrders((prev) => prev.filter((item) => item.productId !== productId));
    };

    const handleUpdateOrder = (productId, newQuantity) => {
        setOrders((prev) =>
            prev.map((item) =>
                item.productId === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Quản Lý Đơn Hàng
                    </a>
                </div>
            </nav>
            <OrderForm products={products} onSubmitOrder={handleSubmitOrder} />
            <OrderList
                orders={orders}
                products={products}
                onDeleteOrder={handleDeleteOrder}
                onUpdateOrder={handleUpdateOrder}
            />
        </div>
    );
};

export default App;
