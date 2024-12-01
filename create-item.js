import { createItemController } from "./create-item/create-item-controller.js"
import { isUserLogeddIn } from "./utils/auth.js"

if(!isUserLogeddIn()) {
    window.location.href = "/"
}


document.addEventListener("DOMContentLoaded", ()=>{
    const createItemForm = document.querySelector("#create-item-form")
    
    createItemController(createItemForm)
})