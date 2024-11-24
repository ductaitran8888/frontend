import React, { useState } from 'react';

const OrderForm = ({ products, onSubmitOrder }) => {
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (productId, quantity) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: quantity > 0 ? quantity : 0,
        }));
    };

    const handleSubmit = (productId) => {
        const quantity = quantities[productId] || 0;
        if (quantity > 0) {
            onSubmitOrder(productId, quantity);
            alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
        } else {
            alert('Vui lòng nhập số lượng lớn hơn 0!');
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
                                    className="form-control mb-2"
                                    placeholder="Số lượng"
                                    value={quantities[product.id] || ''}
                                    onChange={(e) =>
                                        handleQuantityChange(product.id, parseInt(e.target.value, 10) || 0)
                                    }
                                />
                                <button
                                    className="btn btn-primary w-100"
                                    onClick={() => handleSubmit(product.id)}
                                >
                                    Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderForm;
