import { getItems } from "./items-model";
import { buildEmptyItemList, buildItem } from "./items-view";


function drawItems(items, itemsContainer){
    if(!items.length) {
        itemsContainer.innerHTML = buildEmptyItemList();
    } else {
        items.forEach(item =>{
            const newItem = buildItem(item);
            itemsContainer.appenChild(newItem)
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