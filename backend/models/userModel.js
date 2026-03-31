let users = [];

const createUser = (data) => {
    const user = { id: Date.now().toString(), ...data };
    users.push(user);
    return user;
};

const getUserById = (id) => {
    return users.find(u => u.id === id);
};

const getUserByEmail = (email) => {
    return users.find(u => u.email === email);
};

module.exports = {
    createUser,
    getUserById,
    getUserByEmail
};