import { signupController } from "./signup/signup-controller.js";




document.addEventListener("DOMContentLoaded", () =>{

    const signupFrom = document.querySelector("form")
    signupController(signupFrom)
})