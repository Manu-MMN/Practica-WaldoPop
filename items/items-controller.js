import { getItems } from "./items-model.js";
import { buildEmptyItemList, buildItem } from "./items-view.js";


export function drawItems(items, itemsContainer){
    if(!items.length) {
        itemsContainer.innerHTML = buildEmptyItemList();
    } else {
        items.forEach(item =>{
            const newItem = buildItem(item);
            itemsContainer.appendChild(newItem)
        })

    }
}

function fireEvent(message, type, element) {
    const customEvent = new CustomEvent("items-loading-status", {
        detail: {
            message, 
            type
        }
    })
    element.dispatchEvent(customEvent);
}

export async function itemController(itemsContainer){
itemsContainer.innerHTML= "";
try {
    const items = await getItems();
    fireEvent("items loaded successfully","success", itemsContainer);
    drawItems(items, itemsContainer)
} catch (error) {
    fireEvent(error.message, "error", itemsContainer);
}
}