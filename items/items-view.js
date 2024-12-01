export function buildItem(item) {
    const newItem = document.createElement("a")
    newItem.setAttribute("href", `/item-detail.html?id=${item.id}`)
    const createdAt = new Date(item.updateAt)
    newItem.innerHTML = `
<div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0; border-radius: 8px;">

        <img 
            src="${item.image || 'https://via.placeholder.com/150'}" 
            alt="${item.name}" 
            style="width: 100%; max-width: 300px; height: auto; border-radius: 5px;"
        >
        <h2>${item.name}</h2>
        <p><strong>Price:</strong> ${item.price} €</p>
        <p><strong>Type:</strong> ${item.type === 'sale' ? 'For Sale' : 'Buy'}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><em>Posted by User ID ${item.username} on ${createdAt.toLocaleString()}</em></p>
    
    </div>
    `
    return newItem
}


export function buildEmptyItemList() {
    return "<h2> We're out of items!!! </h2>"
}