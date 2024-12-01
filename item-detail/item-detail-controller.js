import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getItem, removeItem } from "./item-detail-model.js"
import { buildDeleteButton, buildItemtDetail } from "./item-detail-view.js"

export async function itemDetailController(itemDetailContainer, itemId) {



    try {
        const item = await getItem(itemId);
        let user = null;
        try {
         user = await getCurrentUserInfo();

        } catch (error) { 
            console.log(error)
        }

        

        itemDetailContainer.innerHTML = buildItemtDetail(item);

        
        if (user && user.id === item.userId) {
            //pintar botón de borrado
            const removeButtonElement = buildDeleteButton();
            itemDetailContainer.appendChild(removeButtonElement);

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
        alert("something went wrong!")
    }
}

