
import {createItem} from "./create-item-model.js"


export function createItemController(createItemFrom) {

    createItemFrom.addEventListener("submit", async (event) =>{
        event.preventDefault();

        const itemNameElement = createItemFrom.querySelector("#item-name")
        const itemPriceElement = createItemFrom.querySelector("#item-price")
        const itemDescriptionElement = createItemFrom.querySelector("#item-description")
        const itemImageElement = createItemFrom.querySelector("#item-image")
        const itemTypeElement = createItemFrom.querySelector("input[name='item-type']:checked");

    
        const itemName = itemNameElement.value;
        const itemPrice = itemPriceElement.value;
        const itemDescription = itemDescriptionElement.value;
        const itemImage = itemImageElement.value;
        const itemType = itemTypeElement.value;

        const newItem = {

            name: itemName,
            price: itemPrice,
            description: itemDescription,
            image: itemImage,
            type: itemType
        }

    await handleCreateItem(newItem)

    })

    async function handleCreateItem(newItem) {
        try {
            await createItem(newItem) 
            window.location.href = "/";
            
        } catch (error) {
            alert(error.message);
        }
    }
}