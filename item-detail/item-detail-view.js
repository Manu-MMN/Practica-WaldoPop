export function buildItemtDetail(item) {
    const createdAt = new Date(item.updatedAt);

    return `
<div>
        <h2>${item.name}</h2>

        <p><strong>Price:</strong> $${item.price}</p>

        <p><strong>Description:</strong> ${item.description}</p>

        ${item.image ? `<img src="${item.image}" alt="${item.name}" style="max-width: 100%; height: auto;" />` : ""}

        <p><strong>Type:</strong> ${item.type === "sale" ? "For Sale" : "For Buy"}</p>

        <p><strong>Posted on:</strong> ${createdAt.toLocaleDateString()}</p>
</div>
    `
}


// creamos el botón de eliminar tweet 
export function buildDeleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "Delete Item";

    return removeButton;
}



