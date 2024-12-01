import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getItem, removeItem } from "./item-detail-model.js"
import { buildDeleteButton, buildItemDetail } from "./item-detail-view.js"

export async function itemDetailController(itemDetailContainer, itemId) {


    //obtener datos del tweet
    try {
        const item = await getItem(itemId);

        const user = await getCurrentUserInfo();

        

        itemDetailContainer.innerHTML = buildItemDetail(item);

        
        if (user.id === item.userId) {
            //pintar botón de borrado
            const removeButtonElement = buildDeleteButton();
            itemDetailContainer.appenChild(removeButtonElement);

            removeButtonElement.addEventListener("click", async () =>{
                const shouldRemoveItem = confirm("Sure you want to delete the item?");  
                if (shouldRemoveItem) {  
                    //gestión del error

                    await removeItem(itemId) 
                    window.location.href = "/"
                } 
            })
        }

    } catch (error) {
        alert("error.message")
    }
}

