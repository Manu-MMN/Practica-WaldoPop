import { createUser } from "./signup-model.js";


async function handleCreateUser(userEmail, password) {
    try {
        await createUser(userEmail, password)
        window.location.href = "/"
    } catch (error) {
        const passwordFeedback = document.getElementById('passwordFeedback');
        passwordFeedback.textContent = error.message;
        passwordFeedback.style.color = 'red';
    }
}


export function signupController(form) {
    // Añadir validación en tiempo real para las contraseñas
    const passwordElement = form.querySelector("#password");
    const passwordConfirmElement = form.querySelector("#password-confirm");
    const passwordFeedback = document.getElementById('passwordFeedback');

    // Validar contraseñas mientras el usuario escribe
    passwordConfirmElement.addEventListener('input', () => {
        if (passwordElement.value !== passwordConfirmElement.value) {
            passwordFeedback.textContent = 'Las contraseñas no coinciden';
            passwordFeedback.style.color = 'red';
        } else {
            passwordFeedback.textContent = 'Las contraseñas coinciden';
            passwordFeedback.style.color = 'green';
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const userEmailElement = form.querySelector("#user-mail");
        const userEmail = userEmailElement.value;
        const password = passwordElement.value;
        const passwordConfirm = passwordConfirmElement.value;

        const errors = [];

        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!emailRegExp.test(userEmail)) {
            errors.push("El formato del email no es válido");
        }

        if (password !== passwordConfirm) {
            errors.push("Las contraseñas no coinciden");
            passwordFeedback.textContent = 'Las contraseñas no coinciden';
            passwordFeedback.style.color = 'red';
            return;
        }

        if (errors.length === 0) {
            handleCreateUser(userEmail, password);
        } else {
            passwordFeedback.textContent = errors.join('. ');
            passwordFeedback.style.color = 'red';
        }
    });
}