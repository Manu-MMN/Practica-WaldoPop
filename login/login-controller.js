import { loginUser } from "./login-model.js"

export function loginController(loginForm) {
    const loginFeedback = document.getElementById('loginFeedback');

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const userEmailElement = loginForm.querySelector("#user-mail");
        const passwordElement = loginForm.querySelector("#password");
        
        const userEmail = userEmailElement.value;
        const password = passwordElement.value;

        // Limpiar feedback anterior
        loginFeedback.textContent = '';

        try {
            const token = await loginUser(userEmail, password);
            
            if (token) {
                localStorage.setItem("jwt", token);
                window.location.href = "/";
            } else {
                loginFeedback.textContent = 'Usuario o contraseña incorrectos';
                loginFeedback.style.color = 'red';
            }
        } catch (error) {
            loginFeedback.textContent = error.message || 'Error al intentar iniciar sesión';
            loginFeedback.style.color = 'red';
            
            // Limpiar el campo de contraseña
            passwordElement.value = '';
        }
    });
}