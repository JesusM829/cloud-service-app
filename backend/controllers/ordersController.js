const orderModel = require('../models/orderModel');

exports.createOrder = (req, res) => {
    const order = orderModel.createOrder(req.body);
    res.json(order);
};

exports.getOrder = (req, res) => {
    const order = orderModel.getOrderById(req.params.id);

    if (!order) {
        return res.status(404).json({ message: 'Pedido no encontrado' });
    }

    res.json(order);
};