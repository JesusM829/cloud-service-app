let orders = [];

const createOrder = (data) => {
    const order = { id: Date.now().toString(), ...data };
    orders.push(order);
    return order;
};

const getOrderById = (id) => {
    return orders.find(o => o.id === id);
};

module.exports = {
    createOrder,
    getOrderById
};