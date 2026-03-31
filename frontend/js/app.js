// =======================
// 🔷 MOSTRAR LOGIN
// =======================
function mostrarLogin() {
    const loginBox = document.getElementById("loginBox");

    loginBox.classList.remove("hidden");
    loginBox.classList.add("show");

    loginBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// =======================
// 🔷 LOGIN
// =======================
async function login() {
    const email = document.getElementById("loginEmail").value;

    if (!email) {
        alert("Ingresa tu correo");
        return;
    }

    try {
        const res = await fetch("http://localhost:3000/users");
        const users = await res.json();

        const user = users.find(u => u.email === email);

        if (user) {
            // Guardar sesión
            localStorage.setItem("user", JSON.stringify(user));

            alert("Bienvenido " + user.name);

            // Redirigir al dashboard
            window.location.href = "dashboard.html";
        } else {
            alert("Usuario no registrado");
        }

    } catch (error) {
        alert("Error al conectar con el servidor");
    }
}

// =======================
// 🔷 REGISTRO
// =======================
async function registrarUsuario() {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const role = document.getElementById("role").value;

    if (!name || !lastname || !email) {
        alert("Completa todos los campos");
        return;
    }

    try {
        const res = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                lastname,
                email,
                phone,
                role
            })
        });

        const data = await res.json();

        alert("Registro exitoso 🎉");

        // Guardar sesión automáticamente
        localStorage.setItem("user", JSON.stringify(data));

        // Redirigir
        window.location.href = "dashboard.html";

    } catch (error) {
        alert("Error al registrar");
    }
}

// =======================
// 🔷 VERIFICAR SESIÓN (dashboard)
// =======================
function verificarSesion() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        window.location.href = "login.html";
    } else {
        const userBox = document.getElementById("userInfo");
        if (userBox) {
            userBox.innerText = "Bienvenido " + user.name;
        }
    }
}

// =======================
// 🔷 LOGOUT
// =======================
function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}