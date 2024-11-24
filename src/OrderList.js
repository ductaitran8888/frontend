import React from 'react';

const OrderList = ({ orders, products, onDeleteOrder, onUpdateOrder }) => {
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Danh Sách Đơn Hàng</h1>
            <table className="table table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order, index) => {
                    const product = products.find((p) => p.id === order.productId);
                    if (!product) return null; // Nếu sản phẩm không tồn tại
                    return (
                        <tr key={product.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.name}</td>
                            <td>{order.quantity}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => {
                                        const newQuantity = parseInt(prompt('Nhập số lượng mới:'), 10);
                                        if (newQuantity > 0) {
                                            onUpdateOrder(order.productId, newQuantity);
                                        } else {
                                            alert('Số lượng không hợp lệ!');
                                        }
                                    }}
                                >
                                    Cập nhật
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDeleteOrder(order.productId)}
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
