

export function createItemController(createItemFrom) {

    createItemFrom.addeventlistener("submit", (event) =>{
        event.preventDefault();

        const itemNameElement = createItemFrom.querySelector("#itemName")
        const itemPriceElement = createItemFrom.querySelector("item-price")
        const descriptionElement = createItemFrom.querySelector("#item-description")
        const imageElement = createItemFrom.querySelector("item-image")
    
        const itemName = itemNameElement.value;
        const itemPrice = itemNameElement.value;
    

    })
}