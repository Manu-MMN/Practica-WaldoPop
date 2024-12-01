import { getItems } from "./items/items-model.js";
import {drawItems} from "./items/items-controller.js";
import { itemController } from "./items/items-controller.js";


document.addEventListener("DOMContentLoaded", async () =>{
    

    const itemsContainer = document.querySelector("#items-container");
    const notificationsContainer = document.querySelector("#notifications-container");
    const sessionContainer = document.querySelector("#session")
    const loginbutton = document.querySelector("#login")
    const signupbutton = document.querySelector("#signup")
    const logoutbutton = document.querySelector("#logout")
    const createItemButton = document.querySelector("#create-item")

    const jwtoken = localStorage.getItem("jwt")

    if(jwtoken) {
        loginbutton.style.display = "none"
        signupbutton.style.display = "none"
        logoutbutton.style.display ="inline-block"
        createItemButton.display = "inline-block"


    } else {
        loginbutton.style.display = "inline-block"
        signupbutton.style.display = "inline-block"
        logoutbutton.style.display ="none"
        createItemButton.style.display = "none"
    }

    logoutbutton.addEventListener("click", () =>{
        localStorage.removeItem("jwt")
    })

    itemController(itemsContainer);
    //const itemList = await getItems(); 

    //drawItems(itemList, itemsContainer)
})

