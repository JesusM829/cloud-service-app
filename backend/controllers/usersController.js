const userModel = require('../models/userModel');

exports.register = (req, res) => {
    const user = userModel.createUser(req.body);
    res.json(user);
};

exports.login = (req, res) => {
    const { email } = req.body;
    const user = userModel.getUserByEmail(email);

    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Login exitoso', user });
};

exports.getUser = (req, res) => {
    const user = userModel.getUserById(req.params.id);

    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(user);
};