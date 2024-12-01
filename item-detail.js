import { isUserLogeddIn } from "./utils/auth.js"

import { itemDetailController } from "./item-detail/item-detail-controller.js";


document.addEventListener("DOMContentLoaded", () => {

    // 1- obtener id del tweet de la url
    const searchParams = new URLSearchParams(window.location.search);
    const itemId = searchParams.get("id");

    // 2- acceder al nodo donde pintaremos el detalle del tweet
    const itemDetailContainer = document.querySelector("#item-detail")

    itemDetailController(itemDetailContainer, itemId)

})