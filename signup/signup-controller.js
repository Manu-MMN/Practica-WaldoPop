import { createUser } from "./signup-model.js";


async function handleCreateUser(userEmail, password) {
    try {
        await createUser(userEmail, password)
        window.location.href = "/"
    } catch (error) {
        alert(error.message)
        
    }
}


export function signupController(form) {
    form.addEventListener("submit", (event) =>{
        event.preventDefault();

        const userEmailElement = form.querySelector("#user-mail");
        const passwordElement = form.querySelector("#password");
        const passwordConfirmElement = form.querySelector("#password-confirm");

        const userEmail = userEmailElement.value;
        const password = passwordElement.value;
        const passwordConfirm = passwordConfirmElement.value

        const error = []

        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if(!emailRegExp.test(userEmail)) {
            error.push("Identifying Invalid Email Formats")
        }

        if(password !== passwordConfirm) {
            error.push("The passwords aren't the same")
        }

        if (error.length === 0){
            handleCreateUser(userEmail, password)
        }
    })
}