const express = require('express');
const cors = require('cors'); // 👈 NUEVO

const app = express();

app.use(cors()); // 👈 NUEVO
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.send('API funcionando correctamente 🚀');
});

// Rutas
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');

app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

// Puerto
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});