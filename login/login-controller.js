import { loginUser } from "./login-model.js"

async function handleLoginUser(userEmail, password) {
    const token = await loginUser(userEmail, password)

    localStorage.setItem("jwt", token);
    windows.location.href = "/"
}

export function signupController(loginForm) {

    form.addEventListener("submit", (event) =>{
        event.preventDefault();

        const userEmailElement = loginForm.querySelector("#user-mail");
        const passwordElement = loginForm.querySelector("#password");

        const userEmail = userEmailElement.value;
        const password = passwordElement.value;

        const error = []

        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if(!emailRegExp.test(userEmail)) {
            alert("Identifying Invalid Email Formats")
        } else {
            handleLoginUser(userEmail, password)
        }
    })
}