import React, { useState } from 'react';

const OrderForm = ({ products, onSubmitOrder }) => {
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (productId, quantity) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: quantity > 0 ? quantity : 0,
        }));
    };

    const handleSubmit = () => {
        const validOrders = Object.entries(quantities)
            .filter(([_, quantity]) => quantity > 0) // Chỉ lấy các sản phẩm có số lượng > 0
            .map(([productId, quantity]) => ({ productId, quantity }));

        if (validOrders.length > 0) {
            validOrders.forEach(({ productId, quantity }) => {
                onSubmitOrder(productId, quantity);
            });
            alert('Đã lưu lại các đơn hàng!');
        } else {
            alert('Vui lòng nhập ít nhất một sản phẩm với số lượng lớn hơn 0!');
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Đặt Hàng</h1>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-3" key={product.id}>
                        <div className="card">
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt={product.name}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Số lượng"
                                    value={quantities[product.id] || ''}
                                    onChange={(e) =>
                                        handleQuantityChange(product.id, parseInt(e.target.value, 10) || 0)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="btn btn-success w-100 mt-4"
                onClick={handleSubmit}
            >
                Lưu Đơn Hàng
            </button>
        </div>
    );
};

export default OrderForm;
